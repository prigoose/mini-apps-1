// require express
const express = require('express')

// invoke express
const app = express()

// serve up html file
app.use(express.static('public'))

// connect to a specific url or port
app.listen(3000, () => console.log('Listening on http://localhost:3000'))