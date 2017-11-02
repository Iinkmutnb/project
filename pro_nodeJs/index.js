var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

var access = require('./accessDatabase/accessDatabase.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000; 
var router = express.Router(); 





var router = express.Router();              


router.use(function(req, res, next) {
   
    console.log('Something is happening.');
    next(); 
});



router.route('/showProduct').post(function(req, res) {
    access.querys(req.body.name,res);
})
router.route('/showModal').post(function(req, res) {
    access.showModal(req.body.id,res);
})


router.route('/login').post(function(req, res) {
       access.login(req.body.user,req.body.pass,res)
 })
 router.route('/checkUser').post(function(req, res) {
    access.checkUser(req.body.user,res)
})
 router.route('/insertusers').post(function(req, res) {
    /*connection.query("INSERT INTO product values( null,'"+req.body.name+"','"+req.body.job+"')", function (err, result, fields) {
        if (err) throw err;
                console.log(result);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.json(result);
               });*/
})
    



app.use('/', router);
app.listen(port);