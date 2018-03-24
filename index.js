const path = require('path');
const express = require("express");
const app = express();

app.set('port', (process.env.PORT || 5000))

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/build', express.static(path.join(__dirname, '/build')));

app.get('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})