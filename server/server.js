'use strict';

const datafunc = require('./database.js');
const path = require('path');

// For loading environment variables.
require('dotenv').config();

const express = require('express');                 // express routing
const expressSession = require('express-session');  // for managing session state
const passport = require('passport');               // handles authentication
const LocalStrategy = require('passport-local').Strategy; // username/password strategy
const app = express();
const port = process.env.PORT || 3000;
const minicrypt = require('./miniCrypt.js');
//const { exists } = require('fs');


const mc = new minicrypt();

//create table userInfo (email varchar(225) primary key, name varchar(225), salt varchar(225), hash varchar(225), phone varchar(255), timezone varchar(225), availability json);
//create table courseInfo (course_name varchar(225), professor varchar(225), course_days boolean[], email varchar(225) , PRIMARY KEY (course_name , email));

// course_name |  professor   |    course_days    |       email       
// -------------+--------------+-------------------+-------------------
//  COMPSCI 326 | emery berger | {f,f,t,f,f,f,t,f} | eberger@umass.edu
// (1 row)

// email       |     name     |        salt         |        hash        |    phone    | timezone |   availability    
// -------------------+--------------+---------------------+--------------------+-------------+----------+-------------------
//  eberger@umass.edu | emery berger | 20309gffytyehherihb | higgi434g5grg43giy | +9084326475 | EST      | {"mon" : [0,1,0]}


// Session configuration
const session = {
    secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
    resave : false,
    saveUninitialized: false
};

// Passport configuration

const strategy = new LocalStrategy(
    async (username, password, done) => {
		console.log(username, password);
	if (! await findUser(username)) {
		// no such user
		//console.log(username, password);
	    return done(null, false, { 'message' : 'Wrong username' });
	}
	if (!await validatePassword(username, password)) {
	    // invalid password
	    // should disable logins after N messages
		// delay return to rate-limit brute-force attacks
		
	    await new Promise((r) => setTimeout(r, 2000)); // two second delay
	    return done(null, false, { 'message' : 'Wrong password' });
	}
	// success!
	// should create a user object here, associated with a unique identifier
	return done(null, username);
    });


// App configuration

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());


// Convert user object to a unique identifier.
passport.serializeUser((user, done) => {
    done(null, user);
});
// Convert a unique identifier to a user object.
passport.deserializeUser((uid, done) => {
    done(null, uid);
});


app.use(express.json()); // allow JSON inputs
app.use(express.urlencoded({'extended' : true})); // allow URLencoded data
app.use(express.static('client'));

// Returns true iff the user exists.
async function findUser(username) {
	const exists = await datafunc.getUser(username);
    if (exists.length === 0) {
	return null;
    } else {
	return exists[0];
    }
}

// Returns true iff the password is the one we have stored (in plaintext = bad but easy).
async function validatePassword(name, pwd) {
	const exists = await findUser(name);
	if (!exists) {
	return false;
	}
	console.log(exists);
	const res = mc.check(pwd, exists.salt, exists.hash);
    return res;
}

// Routes
function checkLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
	// If we are authenticated, run the next route.
	next();
    } else {
	// Otherwise, redirect to the login page.
	res.redirect('/login');
    }
}

app.get('/',
	(req, res) => {
		res.redirect('/login');
	});

// Handle post data from the login.html form.
app.post('/login',
	 passport.authenticate('local' , {     // use username/password authentication
	     'successRedirect' : '/course',   // when we login, go to /private 
	     'failureRedirect' : '/login'      // otherwise, back to login
	 }));

// Handle the URL /login (just output the login.html file).
app.get('/login',
	(req, res) => res.sendFile(path.resolve('./client/homepage.html')));

// Handle logging out (takes us back to the login page).
app.get('/logout', (req, res) => {
    req.logout(); // Logs us out!
    res.redirect('/login'); // back to login
});

// Like login, but add a new user and password IFF one doesn't exist already.
// If we successfully add a new user, go to /login, else, back to /register.
// Use req.body to access data (as in, req.body['username']).
// Use res.redirect to change URLs.
app.post('/register',
	 async (req, res) => {
		const data = req.body;
		const exists = await datafunc.getUser(data.email);
		if(exists.length === 0){
			const pwd = data.password;
			console.log(data.email);
			const [salt, hash] = mc.hash(pwd);
			const hashed = [salt, hash];
			await datafunc.addUser(data.email, data.name, hashed[0], hashed[1]);
			res.redirect('/login');
		}
		else{
			res.redirect('/register');
		}
	 });

// Register URL
app.get('/register',
	(req, res) => res.sendFile(path.resolve('./client/register.html')));
	
//Private data
app.get('/private',
	checkLoggedIn, // If we are logged in (notice the comma!)...
	(req, res) => {             // Go to the user's page.
	    res.redirect('/private/' + req.user);
	});

app.get('/private/:username',
	checkLoggedIn, // If we are logged in (notice the comma!)...
	(req, res) => {             // Go to the user's page.
	    res.send("hello" + req.params.username);
	});

app.get('/course',checkLoggedIn, 
	(req, res) => res.sendFile(path.resolve('./client/courses.html')));

app.post('/course', checkLoggedIn, async (req, res) => {
	const data = req.body;
	console.log(data.course_name);
	console.log(data.course_days);
	await datafunc.addCourse(data.course_name, data.professor, data.course_days, req.user);
    res.send("OK");
});

app.get('/course/view',checkLoggedIn, async (req, res) => {
	res.end(JSON.stringify(
		await datafunc.getCourses(req.user)));
});

app.delete('/course/:course_name',checkLoggedIn, async (req, res) => {
	console.log("deleted from server.", req.params.course_name);
	await datafunc.delCourses(req.params.course_name);
    res.send("OK");
});

app.post('/settings',checkLoggedIn, async (req, res) => {
	const data = req.body;
	console.log(data.phone);
	console.log(data.availability);
	await datafunc.updateUsers(data.phone, data.timezone, data.availability, req.user);
	res.send("OK");
});

app.get('/settings/view',checkLoggedIn, async (req, res) => {
	res.end(JSON.stringify(
		await datafunc.getUserSettings(req.user)));
});

// app.get("/settings/delete", async (req, res) => {
//     await datafunc.deleteClasses(req.query.email, req.query.cid);
//     res.send("OK");
// });

app.post('/search', checkLoggedIn, async (req, res) => {
    await datafunc.addClass(req.query.sid, req.query.cid, req.query.email);
    res.send("OK");
});


app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});
