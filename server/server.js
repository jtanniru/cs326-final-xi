/* eslint-disable no-useless-catch */
'use strict';
// let url = require('url');
// let http = require('http');
// let fs = require('fs');

// // STEP ONE:
// //   build the non-persistent functionality
// //   and test it (no file reading or writing)

// // STEP TWO:
// //   make it persistent by reading and writing a file.
// //
// // things you will need:
// // * to write a file consisting of a single string:
// //   fs.writeFileSync(filename, string, (err) => {})
// // * to check if a file exists already:
// //   fs.existsSync(filename)
// // * to read a file into a string:
// //   fs.readFileSync(filename)

// const datafile = 'datafile.json';
// let dataStore = {};

// function process(request, response, options) {
//     const headerText = {"Content-Type" : "text/json"};
//     response.writeHead(200, headerText);
//     const parsed = url.parse(request.url, true);
//     if (parsed.pathname === "/create") {
// 		// DO SOMETHING
// 		dataStore[options.name] = 0; 	
// 		response.write(JSON.stringify({ 'key' : options.name, 'action' : 'create' })); 
// 		response.end();
// 		// PERSISTENCE: DO SOMETHING
// 		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});	
// 		return;
//     }
//     if (!(options.name in dataStore)) {
// 		response.write(JSON.stringify({ 'error' : "key " + options.name + " not found" }));
// 		response.end();
// 		return;
//     }
//     if (parsed.pathname === "/read") {
// 		let value = dataStore[options.name]; // DO SOMETHING
// 		response.write(JSON.stringify({ 'key' : options.name,
// 						'value' : value,
// 						'action' : 'read' } ));
//     } else if (parsed.pathname === "/update") {
// 		// DO SOMETHING
// 		let value = options.value; // DO SOMETHING
// 		dataStore[options.name] = value;
// 		response.write(JSON.stringify({ 'key' : options.name,
// 						'value' : value,
// 						'action' : 'update' } ));
// 		// PERSISTENCE: DO SOMETHING
// 		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});
//     } else if (parsed.pathname === "/delete") {
// 		// DO SOMETHING
// 		delete dataStore[options.name];
// 		response.write(JSON.stringify({'key' : options.name, 'action' : 'delete' }));
// 		// PERSISTENCE: DO SOMETHING
// 		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});
//     } else {
// 		response.write(JSON.stringify({'error' : "no command found."}));
// 		}
// 		response.end();
// }

// // PERSISTENCE: DO SOMETHING
// if(fs.existsSync(datafile)){
// 	const str = fs.readFileSync(datafile);
// 	dataStore = JSON.parse(str);
// }
// let server = http.createServer((request, response) =>
// 			       {	
// 				   if (request.method === 'GET') {
// 				       const options = url.parse(request.url, true).query;
// 				       process(request, response, options);
// 				   } else {
// 				       let requestBody = "";
// 				       request.on('data', function (data) {
// 					  	 requestBody += data;
// 				       });
// 				       request.on('end', function () {
// 					  	 const options = JSON.parse(requestBody);
// 					  	 process(request, response, options);
// 				       });
// 				   }
// 			     });

// server.listen(process.env.PORT || 8080);


// 'use strict';
// const express = require('express');
// const app = express();
// app.use(express.json()); // lets you handle JSON input
// const port = 3000;
// let datastore = {};
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });
// //   curl -d '{ "value" : "12" }' -H "Content-Type: application/json" http://localhost:3000/read/x
// app.get('/create', (req, res) => {
//     const k = req.query.key;
//     const v = req.query.value;
//     datastore[k] = v;
//     console.log(`Set ${k} to ${v}`);
//     res.send('Set.');
// });
// app.get('/read', (req, res) => {
//     const k = req.query.key;
//     const v = datastore[k];
//     res.send(`key = ${k}, value = ${v}`);
// });
// app.get('/read/:key', (req, res) => {
//     const k = req.params['key'];
//     const v = datastore[k];
//     res.send(`key = ${k}, value = ${v}`);
// });
// //   curl -d '{ "key" : "x", "value" : "12" }' -H "Content-Type: application/json" http://localhost:3000/pcreate
// app.post('/pcreate', (req, res) => {
//     const k = req.body["key"];
//     const v = req.body["value"];
//     datastore[k] = v;
//     console.log(`Set ${k} to ${v}, body = ${JSON.stringify(req.body)}`);
//     res.send('Set.');
// });
// app.get('*', (req, res) => {
//     res.send('NO FOOL');
// });
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });


const express = require("express");
const pgp = require("pg-promise")({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },

    disconnect(client) {
        console.log('Disconnected from database:', client.connectionParameters.database);
    }
});

// Local PostgreSQL credentials
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
    return await connectAndRun(db => db.none("CREATE TABLE Courses (cid INT PRIMARY KEY, course_title VARCHAR(100), course_subject VARCHAR(100), professor_name  VARCHAR(100), course_number  VARCHAR(100), course_days  VARCHAR(100), course_time  VARCHAR(100) );"));
}


async function createUsersTable() {
	return await connectAndRun(db => db.none("CREATE TABLE Users (user_id SERIAL PRIMARY KEY ,email VARCHAR(100), first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(100));"));
}

// async function addCourses() {
// 	return await connectAndRun(db => db.none("INSERT INTO Books VALUES ($1, $2, $3);", [isbn, author, title]));
   
// }

// async function getCourses() {
//     return await connectAndRun(db => db.any("SELECT * FROM courses;"));
// }

// EXPRESS SETUP

const app = express();

//app.use('/', express.static('./html'));

app.get('/', async (req, res) => {
	await createCoursesTable();
	await createUsersTable();
    res.send("OK");
});

app.get('/course/new', async (req, res) => {
    res.send("OK");
});

app.get('/course/CID', async (req, res) => {
    res.send("OK");
});

app.get('/register', async (req, res) => {
    res.send("OK");
});

app.get('/login', async (req, res) => {
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


// app.get("/user/id/checkout/delete", async (req, res) => {
//     const books = await getBooks();
//     res.send(JSON.stringify(books));
// });

// // We use GET here for simplicity
// app.get("/courses", async (req, res) => {
//     await addBook(req.query.isbn, req.query.author, req.query.title);
//     res.send("OK");
// });

app.get('*', (req, res) => {
    res.send('NO FOOL');
});

app.listen(process.env.PORT || 8080);
