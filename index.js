const path = require('path');
const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/build', express.static(path.join(__dirname, '/build')));




app.get('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
});
app.listen(3000);