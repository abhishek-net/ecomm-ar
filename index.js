var express = require("express");
var app = express();

const hostname = '127.0.0.1';
const port = 3000;
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/build', express.static(path.join(__dirname, 'public/build')));




app.get('/', function (req, res) {
		res.sendfile(__dirname + '/index.html');
});
app.listen(3000);