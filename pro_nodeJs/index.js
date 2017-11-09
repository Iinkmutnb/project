var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var multiparty = require('multiparty');


var http = require('http');
var fs = require('fs');

//var multer = require('multer');


var access = require('./accessDatabase/accessDatabase.js');
/*const storage = multer.diskStorage({
    destination: './uploads',
    filename(req, file, cb) {
      cb(null, `${new Date()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage });*/

/*app.use(multer({
    dest: __dirname + '/uploads/',
    rename: function(fieldname, filename) {
        return Date.now();
    },
    limits: {
        fileSize: 100000
    },
    onFileSizeLimit: function(file) {
        console.log('Failed: ' + file.originalname + ' is limited');
        fs.unlink(file.path);
    }
}));*/

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
 router.route('/checkUserPass').post(function(req, res) {
    access.checkUserPass(req.body.user,req.body.email,res)
})
 router.route('/insertusers').post(function(req, res) {
    access.insertUser(req.body.user,req.body.pass,req.body.name,req.body.subName,req.body.email,req.body.phone,req.body.address,res);
})



router.route('/uploadImage').post( function(req, res) {

    let form = new multiparty.Form();
    
      form.parse(req, (err, fields, files) => {
          
    
        let {path: tempPath, originalFilename} = files.file[0];
       
        let copyToPath = "./images/" + originalFilename;
  // console.log(fields.imagePreviewUrl[0])
  var matches = fields.imagePreviewUrl[0].match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), response = {};
  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');
  fs.writeFile('./image/'+originalFilename,response.data, function(err) {    if (err) throw err;
    console.log('It\'s saved!'); });
       
  
/*  fs.readFile(tempPath, (err, data) => {
         
            if (err) throw err;
          fs.writeFile(copyToPath,data, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
          
            fs.unlink(fields.imagePreviewUrl[0], () => {
            
            });
          });
        }); */
       
      })
    
})



app.use('/', router);
app.listen(port);