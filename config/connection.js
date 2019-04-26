var mysql = require('mysql');
var connection;

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lily1chloe2',
    database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.error('There was an error conencting: ' + err.stack + '\n');
		return;
	}
	console.log('You are connected as id ' + connection.threadId + '\n');
});
module.exports = connection;