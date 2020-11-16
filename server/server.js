'use strict';
//import * as utils from "./database.js";
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

// Two tables Users and Courses 
//Database functions

async function createCoursesTable() {
    return await connectAndRun(db => db.none('CREATE TABLE [IF NOT EXISTS] Courses (cid INT PRIMARY KEY, course_title VARCHAR(100), course_subject VARCHAR(100), professor_name  VARCHAR(100), course_number  VARCHAR(100), course_days VARCHAR(100), course_time  VARCHAR(100));'));
}


async function createUsersTable() {
	return await connectAndRun(db => db.none('CREATE TABLE [IF NOT EXISTS] Users (email VARCHAR(100) PRIMARY KEY, username VARCHAR(100), first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(100) NOT NULL, Timezone password VARCHAR(100), availability [], cids TEXT [] );')); //have to add availability and list of classes 
}

async function createClassesTable() {
	return await connectAndRun(db => db.none('CREATE TABLE [IF NOT EXISTS] Classes (email VARCHAR(100), cid VARCHAR(100);')); 
}

async function addUser(email, password) {
    return await connectAndRun(db => db.none('INSERT INTO Users (email, password) VALUES ($1, $2);', [email, password]));   
}

async function getUser(email) {
    return await connectAndRun(db => db.one('SELECT * FROM Users Where email = $1;', [email]));
}

async function addCourse(cid, course_title, course_subject, professor_name, course_number, course_days, course_time) {
    return await connectAndRun(db => db.none('INSERT INTO Courses (cid, course_title, course_subject, professor_name, course_number, course_days, course_time) VALUES ($1, $2, $3, $4, $5, $6, $7);', [ cid, course_title, course_subject, professor_name, course_number, course_days, course_time]));   
}

async function getCourses() {
    return await connectAndRun(db => db.any('SELECT * FROM Courses;'));
}

async function addClass(cid, email) {
    return await connectAndRun(db => db.none('INSERT INTO Classes (cid, email) VALUES ($1, $2, $3);', [cid, email]));   
}

async function getClasses() {
    return await connectAndRun(db => db.any('SELECT * FROM Courses;'));
}

async function deleteClasses(email, cid) {
    return await connectAndRun(db => db.none('DELETE FROM Classes WHERE email = $1 and cid = $2;', [email,cid]));
}

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

    await addUser(req.query.email, req.query.password);
    res.send("OK");
});

app.get('/login', async (req, res) => {
    const userInfo = await getUser(req.query.email);
    res.send(JSON.stringify(userInfo));
});

app.get('/course/id/new', async (req, res) => {
    await addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
    res.send("OK");
});

app.get('/course/id/delete', async (req, res) => {
    await addCourse(req.query.cid, req.query.course_title, req.query.course_subject, req.query.professor_name, req.query.course_number, req.query.course_days, req.query.course_time );
    res.send("OK");
});

app.post('/user/id/settings/add', async function (req, res) {
	const classes = await getClasses();
    res.send(JSON.stringify(classes));
  });

app.get("/user/id/settings/delete", async (req, res) => {
    await deleteClasses(req.query.email, req.query.cid);
    res.send("OK");
});

app.get('/user/id/search', async (req, res) => {
    await addClass(req.query.sid, req.query.cid, req.query.email);
    res.send("OK");
});

app.get('*', (req, res) => {
    res.send('NO FOOL');
});

app.listen(process.env.PORT || 8080);
