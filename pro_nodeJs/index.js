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
});
router.route('/showModal').post(function(req, res) {
    access.showModal(req.body.code,res);
});


router.route('/login').post(function(req, res) {
       access.login(req.body.user,req.body.pass,res)
 });
 router.route('/checkUserPass').post(function(req, res) {
    access.checkUserPass(req.body.user,req.body.email,res)
});
 router.route('/insertusers').post(function(req, res) {
    access.insertUser(req.body.user,req.body.pass,req.body.name,req.body.subName,req.body.email,req.body.phone,req.body.address,res);
});



router.route('/uploadImage').post( function(req, res) {
    access.insertImageProduct(req,res);
}); 

router.route('/checkProduct').post( function(req, res) {
    
    access.checkProduct(req,res,req.body.code,req.body.name,req.body.file);
});
router.route('/insertProduct').post( function(req, res) {
    
    access.insertProduct(req,res,req.body.code,req.body.name,req.body.price,req.body.file,req.body.definition);
});


app.use('/', router);
app.listen(port);