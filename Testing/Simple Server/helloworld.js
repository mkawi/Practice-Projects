const express = require('../../node_modules/express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.listen(3000, function() {
	console.log('Server is listening at 3000');
});
