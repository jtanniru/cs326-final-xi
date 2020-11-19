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


const mc = new minicrypt();

// Session configuration

const session = {
    secret : process.env.SECRET || 'SECRET', // set this encryption key in Heroku config (never in GitHub)!
    resave : false,
    saveUninitialized: false
};

// Passport configuration

const strategy = new LocalStrategy(
    async (username, password, done) => {
	if (!findUser(username)) {
	    // no such user
	    return done(null, false, { 'message' : 'Wrong username' });
	}
	if (!validatePassword(username, password)) {
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
app.use(express.static('client'));
app.use(express.static('images'));


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

/////

// we use an in-memory "database"; this isn't persistent but is easy

console.log(mc.hash('compsci326'));

// let users = { 'emery' : 'compsci326' } // default user
let users = { 'eberger@umass.edu' : [
  '2401f90940e037305f71ffa15275fb0d',
  '61236629f33285cbc73dc563cfc49e96a00396dc9e3a220d7cd5aad0fa2f3827d03d41d55cb2834042119e5f495fc3dc8ba3073429dd5a5a1430888e0d115250'
] };


// Returns true iff the user exists.
function findUser(username) {
    if (!users[username]) {
	return false;
    } else {
	return true;
    }
}

// TODO
// Returns true iff the password is the one we have stored (in plaintext = bad but easy).
function validatePassword(name, pwd) {
    if (!findUser(name)) {
	return false;
	}
	const key = users[name];
	const res = mc.check(pwd, key[0], key[1]);
    return res;
}

// Add a user to the "database".
// TODO
function addUser(name, pwd) {
    if (findUser(name)) {
	return false;
	}
	else{
		const [salt, hash] = mc.hash(pwd);
		users[name] = [salt, hash];
		return true;
	}
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
	checkLoggedIn,
	(req, res) => {
	    res.send("hello world");
	});

// Handle post data from the login.html form.
app.post('/login',
	 passport.authenticate('local' , {     // use username/password authentication
	     'successRedirect' : '/private',   // when we login, go to /private 
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
	 (req, res) => {
	     const username = req.body['username'];
	     const password = req.body['password'];
	     if (addUser(username, password)) {
		 res.redirect('/login');
	     } else {
		 res.redirect('/register');
	     }
	 });

// Register URL
app.get('/register',
	(req, res) => res.sendFile(path.resolve('./client/register.html')));
	//res.sendFile('client/register.html',
				   //{ 'root' : __dirname }));

// Private data
app.get('/private',
	checkLoggedIn, // If we are logged in (notice the comma!)...
	(req, res) => {             // Go to the user's page.
	    res.redirect('/private/' + req.user);
	});

// A dummy page for the user.
app.get('/private/:userID/',
	checkLoggedIn, // We also protect this route: authenticated...
	(req, res) => {
	    // Verify this is the right user.
	    if (req.params.userID === req.user) {
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write('<H1>HELLO ' + req.params.userID + "</H1>");
		res.write('<br/><a href="/logout">click here to logout</a>');
		res.end();
	    } else {
		res.redirect('/private/');
	    }
	});

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});

// Three tables Users, Courses, Attend

// app.post('/register', async (req, res) => {

//     await datafunc.addUser(req.query.email, req.query.password);
//     res.send("OK");
// });

// app.get('/login', async (req, res) => {
// 	const userInfo = await datafunc.getUser(req.query.email);
//     res.send(JSON.stringify(userInfo));
// });

// app.get('/course/id/new', async (req, res) => {
//     await datafunc.addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
//     res.send("OK");
// });

// app.get('/course/id/delete', async (req, res) => {
//     await datafunc.addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
//     res.send("OK");
// });

// app.post('/user/id/settings/add', async function (req, res) {
// 	const classes = await datafunc.getClasses();
//     res.send(JSON.stringify(classes));
//   });

// app.get("/user/id/settings/delete", async (req, res) => {
//     await datafunc.deleteClasses(req.query.email, req.query.cid);
//     res.send("OK");
// });

// app.get('/user/id/search', async (req, res) => {
//     await datafunc.addClass(req.query.sid, req.query.cid, req.query.email);
//     res.send("OK");
// });