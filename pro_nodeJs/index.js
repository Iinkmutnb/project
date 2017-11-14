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
router.route('/selectOneProduct').post( function(req, res) {
    
    access.selectOneProduct(req,res,req.body.code);
});
router.route('/checkEditProduct').post( function(req, res) {
    
    access.checkEditProduct(req,res,req.body.codeOld,req.body.nameOld,req.body.srcOld,req.body.code,req.body.name,req.body.file);
});
router.route('/editProduct').post( function(req, res) {
    
    access.editProduct(req,res,req.body.codeOld,req.body.code,req.body.name,req.body.price,req.body.file,req.body.definition);
});
router.route('/editUploadImageProduct').post( function(req, res) {
    access.editUploadImageProduct(req,res);
}); 
router.route('/deleteProduct').post( function(req, res) {
    access.deleteProduct(req,res,req.body.code,req.body.Src);
   
});
router.route('/showOfficer').post( function(req, res) {
   
    access.showOffice(req.body.name,res);
   
});
router.route('/checkOfficer').post( function(req, res) {
  
    access.checkOfficer(req,res,req.body.code,req.body.user,req.body.file);
   
});
router.route('/insertOfficer').post( function(req, res) {
    
      access.insertOfficer(req,res,req.body.code,req.body.name,req.body.subname,req.body.file,req.body.address,req.body.user,req.body.pass);
     
  });
  router.route('/insertImageOfficer').post( function(req, res) {
    access.insertImageOfficer(req,res);
}); 
app.use('/', router);
app.listen(port);