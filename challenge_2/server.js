const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();


// app.use((req, res, next) => {
// 	console.log(`received a ${req.method} to ${req.url}`);
// 	console.log(`req body: ${JSON.stringify(req.body)}, 
// 				req.query: ${req.query},
// 				req.params: ${req.params}`)
// 	next();
// })        

app.use(bodyParser.json());   


// App.use(express.static) is an easy way to serve your initial home page.
// I think it's equivalent to app.get() {res.sendFile(index.html)}
// this is also how we connect the server to the client side
// we use server to render specified files at the specified url (in this case port 3000)
app.use(express.static('./client'))

// handle get requests when they send input into text field
app.post('/csv', function(req, res) {
	// console.log(req.body);
	// console.log(typeof req.body);
	var keys = (Object.keys(req.body));
	var childrenIndex = keys.indexOf('children');
	keys.splice(childrenIndex, 1);
	console.log(keys)
	finalCSV = keys.join(',') + '\n'
	var helper = function(object) {
		var lineContent = [];
		for (key in object) {
			if (key !== 'children') {
				lineContent.push(object[key]);
			}
		}
		// lineContent.push(object.firstName, object.lastName, object.county, object.city, object.role, object.sales);
		finalCSV += lineContent.join(',') + '\n'
		for (var i=0; i < object.children.length; i++) {
			helper(object.children[i])
		}
	}
	helper(req.body);

	// var finalCSV = fileContents.join(',');
	fs.writeFile('results.csv', finalCSV, (err) => {
  		if (err) throw err;
  		console.log('The file has been saved!');
	});

	res.send('POST request worked')
})

// write app.get to return them a file
app.get('/csv', function (req, res) {
	var csvText = fs.readFile('results.csv', (err, data) => {
		if (err) throw err;
		console.log(data);
		res.send(data);
	})
})


	// fs.readFile('results.csv', (err, data) => {
	//   if (err) {throw err};
	//   res.send('GET request to the homepage')
	// });

app.listen(3000, () => console.log('App is running on http://localhost:3000'))
