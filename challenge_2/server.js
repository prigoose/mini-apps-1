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
	fs.writeFile('results.csv', req.body.firstName, (err) => {
  		if (err) throw err;
  		console.log('The file has been saved!');
	});
})

app.listen(3000, () => console.log('App is running on http://localhost:3000'))
