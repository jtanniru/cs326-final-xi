//create table userInfo (email varchar(225) primary key, name varchar(225), salt varchar(225), hash varchar(225), phone varchar(255), timezone varchar(225), availability json);
//create table courseInfo (course_name varchar(225), professor varchar(225), course_days boolean[], email varchar(225));

// course_name |  professor   |    course_days    |       email       
// -------------+--------------+-------------------+-------------------
//  COMPSCI 326 | emery berger | {f,f,t,f,f,f,t,f} | eberger@umass.edu
// (1 row)

// email       |     name     |        salt         |        hash        |    phone    | timezone |   availability    
// -------------------+--------------+---------------------+--------------------+-------------+----------+-------------------
//  eberger@umass.edu | emery berger | 20309gffytyehherihb | higgi434g5grg43giy | +9084326475 | EST      | {"mon" : [0,1,0]}


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

async function getCourses() {
    return await connectAndRun(db => db.any('SELECT * FROM courseInfo;'));
}


module.exports =  {addUser, getUser, addCourse, getCourses}