var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'users',
  });

  connection.query("SET NAMES utf8");

  connection.query("INSERT INTO users values(null,'กบยาง','100')", function (err, result, fields) {
    if (err) throw err;
            console.log(result);
            //res.setHeader('Access-Control-Allow-Origin', '*');
            //res.json(result);
           });