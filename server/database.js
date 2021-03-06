/*
    Commands to create userInfo and courseInfo tables:

        create table userInfo (email varchar(225) primary key, name varchar(225), salt varchar(225), hash varchar(225), phone varchar(255), timezone varchar(225), availability boolean[][]);
        create table courseInfo (course_name varchar(225), professor varchar(225), course_days boolean[], email varchar(225) , PRIMARY KEY (course_name ,  email));

    Example tables:

        course_name  |  professor   |   course_days   | email 
        -------------+--------------+-----------------+-------
        cs 326       | emery berger | {f,t,f,t,f,f,f} | a@b.c


        email              |     name     |        salt         |        hash        |    phone    | timezone |   availability    
        -------------------+--------------+---------------------+--------------------+-------------+----------+-------------------
        eberger@umass.edu  | emery berger | 20309gffytyehherihb | higgi434g5grg43giy | +9084326475 | EST      | {"mon" : [0,1,0]}
*/

const pgp = require('pg-promise')({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },

    disconnect(client) {
        console.log('Disconnected from database:', client.connectionParameters.database);
    }
});

const username = "postgres";
const password = "admin";

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp(url);

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
async function addUser(email, name, salt, hash) {
    return await connectAndRun(db => db.none('INSERT INTO userInfo (email, name, salt, hash) VALUES ($1, $2, $3, $4);', [email, name, salt, hash]));   
}

async function getUser(email) {
    return await connectAndRun(db => db.any('SELECT * FROM userInfo WHERE email = $1;', [email]));
}

async function addCourse(course_name, professor, course_days, email) {
    return await connectAndRun(db => db.none('INSERT INTO courseInfo (course_name, professor, course_days, email) VALUES ($1, $2, $3, $4);', [course_name, professor, course_days, email]));   
}

async function getCourses(email) {
    return await connectAndRun(db => db.any('SELECT * FROM courseInfo where email = $1;', [email]));
}

async function delCourses(course_name, email) {
    return await connectAndRun(db => db.none('DELETE FROM courseInfo where course_name = $1 and email = $2;', [course_name, email]));
}

async function updateUsers(phone, timezone, availability, email) {
    return await connectAndRun(db => db.none('UPDATE userInfo SET phone = $1, timezone = $2, availability = $3 where email = $4;', [phone, timezone, availability, email]));
}

async function getUserSettings(email) {
    return await connectAndRun(db => db.any('SELECT * FROM userInfo where email = $1;', [email]));
}

async function searchUsers(course_names, professors, course_days, timezones) {
    return await connectAndRun(db => db.any('SELECT name, courseInfo.email , phone from userInfo join courseInfo on courseInfo.email = userInfo.email where course_name = $1 and professor = $2 and course_days = $3 and timezone = $4 ;', [course_names, professors, course_days, timezones])); 
}

async function userAvailability(email) {
    return await connectAndRun(db => db.any('SELECT availability FROM userInfo where email = $1;', [email]));
}

module.exports =  {addUser, getUser, addCourse, getCourses, delCourses, updateUsers, getUserSettings, userAvailability, searchUsers};
