
'use strict';

import pgPromise from "pg-promise";
const pgp = pgPromise({});
import * as _express from "express";
const express = _express["default"];

// Local PostgreSQL credentials
const username = "postgres";
const password = "admin";

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp(url);

app.use('/', express.static('./js_files'));
app.use('/', express.static('./HTML_CSS_filesfiles'));

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

//Database functions

async function createCoursesTable() {
    return await connectAndRun(db => db.none('CREATE TABLE Courses (cid INT PRIMARY KEY, course_title VARCHAR(100), course_subject VARCHAR(100), professor_name  VARCHAR(100), course_number  VARCHAR(100), course_days  VARCHAR(100), course_time  VARCHAR(100));'));
}


async function createUsersTable() {
	return await connectAndRun(db => db.none('CREATE TABLE Users (email VARCHAR(100) PRIMARY KEY, username VARCHAR(100), first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(100) NOT NULL, Timezone password VARCHAR(100));')); //have to add availability
}

 async function addUser(email, password) {
    return await connectAndRun(db => db.none("INSERT INTO Users (email, password) VALUES ($1, $2);", [email, password]));   
}

async function getUser(email) {
    return await connectAndRun(db => db.any("SELECT password FROM Users Where email = $1;", [email]));
}

// EXPRESS SETUP

const app = express();

//serving static files
app.use(express.static('../js_files'));
app.use(express.static('../HTML_CSS_files'));

app.get('/', async (req, res) => {
	await createCoursesTable();
	await createUsersTable();
    res.send("OK");
});

app.get('/register', async (req, res) => {
    await addUser(req.query.email, req.query.password);
    res.send("OK");
});

app.get('/login', async (req, res) => {
    const password = await getUser();
    res.send(JSON.stringify(password));
});


app.get('/course/new', async (req, res) => {
    res.send("OK");
});

app.get('/course/CID', async (req, res) => {
    res.send("OK");
});

app.get('/user/id/classes/new', async (req, res) => {
    res.send("OK");
});

app.post('/user/id/classes/view', function (req, res) {
	res.send('Got a POST request');
  });

app.get("/user/id/classes/delete", async (req, res) => {
    res.send("");
});

app.get('*', (req, res) => {
    res.send('NO FOOL');
});

app.listen(process.env.PORT || 8080);
