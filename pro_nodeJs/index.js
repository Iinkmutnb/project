var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var mysql = require('mysql');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000; 
var router = express.Router(); 


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'product',
  });


var router = express.Router();              


router.use(function(req, res, next) {
   
    console.log('Something is happening.');
    next(); 
});



router.route('/showProduct').post(function(req, res) {
    connection.query("SELECT "+req.body.name+" FROM product", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(result);
       });
           })
router.route('/showModal').post(function(req, res) {
    connection.query("SELECT * FROM product where id ='"+req.body.id+"'", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(result);
       });

})

 router.route('/insertusers').post(function(req, res) {
    connection.query("SET NAMES utf8");
    connection.query("INSERT INTO product values( null,'"+req.body.name+"','"+req.body.job+"')", function (err, result, fields) {
        if (err) throw err;
                console.log(result);
                //res.setHeader('Access-Control-Allow-Origin', '*');
                //res.json(result);
               });
                   })



app.use('/', router);
app.listen(port);