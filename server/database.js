//create table userInfo (email varchar(225) primary key, name varchar(225), salt varchar(225), hash varchar(225),  timezone varchar(225), availability json);
//create table courseInfo (course_name varchar(225), professor varchar(225), course-days boolean[], email varchar(225));

// course_name | professor | course_days | email 
// -------------+-----------+-------------+-------
// (0 rows)

// email        |     name      |  password  |    phone     | timezone | availability 
// --------------------+---------------+------------+--------------+----------+--------------
//  jtanniru@umass.edu | Janvi Tanniru | Study123$$ | +19084326475 | EST      | {"mon": "0"}
// (1 row)


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

module.exports =  {}