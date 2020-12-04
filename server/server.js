'use strict';

const datafunc = require('./database.js');
const path = require('path');

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
    secret : process.env.SECRET || 'SECRET',
    resave : false,
    saveUninitialized: false
};

// Passport configuration
const strategy = new LocalStrategy(
	async (username, password, done) => {
		if (! await findUser(username)) {
			return done(null, false, { 'message' : 'Wrong username' });
		}
		if (!await validatePassword(username, password)) {	
			await new Promise((r) => setTimeout(r, 2000));
			return done(null, false, { 'message' : 'Wrong password' });
		}
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

app.use(express.json()); 
app.use(express.urlencoded({'extended' : true})); 
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
	const res = mc.check(pwd, exists.salt, exists.hash);
  return res;
}

// Routes
function checkLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
			next();
    } else {
			res.redirect('/login');
    }
}

app.get('/',
	(req, res) => {
		res.redirect('/login');
});

// Handle post data from the login.html form.
app.post('/login',
	passport.authenticate('local' , {   
			'successRedirect' : '/course',  
			'failureRedirect' : '/login'      
}));

app.get('/login',
	(req, res) => res.sendFile(path.resolve('./client/homepage.html')));

app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/login');
});

app.post('/register',
	 async (req, res) => {
		const data = req.body;
		const exists = await datafunc.getUser(data.email);
		if(exists.length === 0){
			const pwd = data.password;
			const [salt, hash] = mc.hash(pwd);
			const hashed = [salt, hash];
			await datafunc.addUser(data.email, data.name, hashed[0], hashed[1]);
			res.redirect('/login');
		}
		else{
			res.redirect('/register');
		}
});

app.get('/register',
	(req, res) => res.sendFile(path.resolve('./client/register.html')));
	
app.get('/private',
	checkLoggedIn,
	(req, res) => {            
	    res.redirect('/private/' + req.user);
});

app.get('/private/:username',
	checkLoggedIn, 
	(req, res) => {             
	    res.send("hello" + req.params.username);
});

app.get('/course',checkLoggedIn, 
	(req, res) => res.sendFile(path.resolve('./client/courses.html')));

app.post('/course', checkLoggedIn, async (req, res) => {
	const data = req.body;
	await datafunc.addCourse(data.course_name, data.professor, data.course_days, req.user);
    res.send("OK");
});

app.get('/course/view',checkLoggedIn, async (req, res) => {
	res.end(JSON.stringify(
		await datafunc.getCourses(req.user)));
});

app.delete('/course/:course_name',checkLoggedIn, async (req, res) => {
	await datafunc.delCourses(req.params.course_name, req.user);
    res.send("OK");
});

app.post('/settings',checkLoggedIn, async (req, res) => {
	const data = req.body;
	await datafunc.updateUsers(data.phone, data.timezone, data.availability, req.user);
	res.send("OK");
});

app.get('/settings/view',checkLoggedIn, async (req, res) => {
	res.end(JSON.stringify(
		await datafunc.getUserSettings(req.user)));
});

app.post('/search', checkLoggedIn, async (req, res) => {
	const data = req.body;
	console.log(data.course_days);
    res.end(JSON.stringify(
	await datafunc.searchUsers(data.course_name, data.professor, data.course_days, data.timezone)));
});

app.post('/availability',  checkLoggedIn, async(req, res) => {
	const data = req.body;
	res.end(JSON.stringify(await datafunc.userAvailability(data.email)));
});

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});