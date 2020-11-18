'use strict';
// For loading environment variables.
//require('dotenv').config();

import config from 'dotenv';
import express, { json, urlencoded, static } from 'express';                 // express routing
import expressSession from 'express-session';  // for managing session state
import { use, initialize, session as _session, serializeUser, deserializeUser, authenticate } from 'passport';               // handles authentication
import { Strategy as LocalStrategy } from 'passport-local'; // username/password strategy
const app = express();
const port = process.env.PORT || 3000;

config();
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
use(strategy);
app.use(initialize());
app.use(_session());

// Convert user object to a unique identifier.
serializeUser((user, done) => {
    done(null, user);
});
// Convert a unique identifier to a user object.
deserializeUser((uid, done) => {
    done(null, uid);
});

app.use(json()); // allow JSON inputs
app.use(urlencoded({'extended' : true})); // allow URLencoded data

/////

// we use an in-memory "database"; this isn't persistent but is easy
let users = { 'emery' : 'compsci326' } // default user
let userMap = {};

// Returns true iff the user exists.
function findUser(username) {
    if (!users[username]) {
	return false;
    } else {
	return true;
    }
}

// Returns true iff the password is the one we have stored (in plaintext = bad but easy).
function validatePassword(name, pwd) {
    if (!findUser(name)) {
	return false;
    }
    if (users[name] !== pwd) {
	return false;
    }
    return true;
}

// Add a user to the "database".
// Return true if added, false otherwise (because it was already there).
// TODO
function addUser(name, pwd) {
	// TODO
	if(findUser(name)){
		return false;
	}
	else{
		users[name] = pwd;
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
	 authenticate('local' , {     // use username/password authentication
	     'successRedirect' : '/private',   // when we login, go to /private 
	     'failureRedirect' : '/login'      // otherwise, back to login
	 }));

// Handle the URL /login (just output the login.html file).
app.get('/login',
	(req, res) => res.sendFile('html/login.html',
				   { 'root' : __dirname }));

// Handle logging out (takes us back to the login page).
app.get('/logout', (req, res) => {
    req.logout(); // Logs us out!
    res.redirect('/login'); // back to login
});


// Add a new user and password IFF one doesn't exist already.
// If we successfully add a new user, go to /login, else, back to /register.
// Use req.body to access data (as in, req.body['username']).
// Use res.redirect to change URLs.
// TODO
app.post('/register',
	 (req, res) => {
	     const username = req.body['username'];
	     const password = req.body['password'];
		 // Check if we successfully added the user.
	     // If so, redirect to '/login'
	     // If not, redirect to '/register'.
		 if(addUser(username, password)){
			res.redirect('/login');
		 }
		 else{
			res.redirect('/register');
		 }
	     
	 });

// Register URL
app.get('/register',
	(req, res) => res.sendFile('html/register.html',
				   { 'root' : __dirname }));

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

app.use(static('html'));

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
    console.log(`App now listening at http://localhost:${port}`);
});

import * as utils from "./database.js";
import pgp from "pg-promise";
//const pgp = pgPromise({});
import * as _express from "express";
const express = _express["default"];

// Local PostgreSQL credentials
const username = "postgres";
const password = "admin";

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp()(url);

app.use('/', express.static('./client'));

async function connectAndRun(task) {
    let connection = null;

    try {
        connection = await db.connect();
        return await task(connection);
	} 
	// eslint-disable-next-line no-useless-catch
	catch (e) {
        throw e;
	} 
	finally {
        try {
            connection.done();
		} 
		// eslint-disable-next-line no-empty
		catch(ignored) {
        }
    }
}

// Three tables Users, Courses, Attend

// EXPRESS SETUP

const app = express();

//serving static files
app.use(express.static('../js_files'));
app.use(express.static('../HTML_CSS_files'));

app.get('/', async (req, res) => {
	await createCoursesTable();
    await createUsersTable();
    await createClassesTable();
    res.send("OK");
});

app.post('/register', async (req, res) => {

    await utils.addUser(req.query.email, req.query.password);
    res.send("OK");
});

app.get('/login', async (req, res) => {
    const userInfo = await utils.getUser(req.query.email);
    res.send(JSON.stringify(userInfo));
});

app.post('/course/id/new', async (req, res) => {
    await utils.addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
    res.send("OK");
});

app.get('/course/id/delete', async (req, res) => {
    await utils.addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
    res.send("OK");
});

app.post('/user/id/settings/add', async function (req, res) {
	const classes = await utils.getClasses();
    res.send(JSON.stringify(classes));
  });

app.get("/user/id/settings/delete", async (req, res) => {
    await utils.deleteClasses(req.query.email, req.query.cid);
    res.send("OK");
});

app.get('/user/id/search', async (req, res) => {
    await utils.addClass(req.query.sid, req.query.cid, req.query.email);
    res.send("OK");
});

app.get('*', (req, res) => {
    res.send('NO FOOL');
});

app.listen(process.env.PORT || 8080);
