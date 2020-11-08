'use strict';
let url = require('url');
let http = require('http');
let fs = require('fs');

// STEP ONE:
//   build the non-persistent functionality
//   and test it (no file reading or writing)

// STEP TWO:
//   make it persistent by reading and writing a file.
//
// things you will need:
// * to write a file consisting of a single string:
//   fs.writeFileSync(filename, string, (err) => {})
// * to check if a file exists already:
//   fs.existsSync(filename)
// * to read a file into a string:
//   fs.readFileSync(filename)

const datafile = 'datafile.json';
let dataStore = {};

function process(request, response, options) {
    const headerText = {"Content-Type" : "text/json"};
    response.writeHead(200, headerText);
    const parsed = url.parse(request.url, true);
    if (parsed.pathname === "/create") {
		// DO SOMETHING
		dataStore[options.name] = 0; 	
		response.write(JSON.stringify({ 'key' : options.name, 'action' : 'create' })); 
		response.end();
		// PERSISTENCE: DO SOMETHING
		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});	
		return;
    }
    if (!(options.name in dataStore)) {
		response.write(JSON.stringify({ 'error' : "key " + options.name + " not found" }));
		response.end();
		return;
    }
    if (parsed.pathname === "/read") {
		let value = dataStore[options.name]; // DO SOMETHING
		response.write(JSON.stringify({ 'key' : options.name,
						'value' : value,
						'action' : 'read' } ));
    } else if (parsed.pathname === "/update") {
		// DO SOMETHING
		let value = options.value; // DO SOMETHING
		dataStore[options.name] = value;
		response.write(JSON.stringify({ 'key' : options.name,
						'value' : value,
						'action' : 'update' } ));
		// PERSISTENCE: DO SOMETHING
		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});
    } else if (parsed.pathname === "/delete") {
		// DO SOMETHING
		delete dataStore[options.name];
		response.write(JSON.stringify({'key' : options.name, 'action' : 'delete' }));
		// PERSISTENCE: DO SOMETHING
		fs.writeFileSync(datafile, JSON.stringify(dataStore), (err) => {});
    } else {
		response.write(JSON.stringify({'error' : "no command found."}));
		}
		response.end();
}

// PERSISTENCE: DO SOMETHING
if(fs.existsSync(datafile)){
	const str = fs.readFileSync(datafile);
	dataStore = JSON.parse(str);
}
let server = http.createServer((request, response) =>
			       {	
				   if (request.method === 'GET') {
				       const options = url.parse(request.url, true).query;
				       process(request, response, options);
				   } else {
				       let requestBody = "";
				       request.on('data', function (data) {
					  	 requestBody += data;
				       });
				       request.on('end', function () {
					  	 const options = JSON.parse(requestBody);
					  	 process(request, response, options);
				       });
				   }
			     });

server.listen(process.env.PORT || 8080);
