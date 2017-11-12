var querys = require('./showProduct.js');
var showModal = require('./showModal.js');
var login = require('./login.js');
var checkUserPass=require('./checkUserPass.js');
var insertUser=require('./insertUser.js');
var insertImageProduct=require('./insertImageProduct.js');
var checkProduct=require('./checkProduct.js');
var insertProduct=require('./insertProduct.js');
var selectOneProduct=require('./selectOneProduct.js');
var checkEditProduct=require('./checkEditProduct.js');
var editProduct=require('./editProduct.js');
var editUploadImageProduct=require('./editUploadImageProduct.js');

module.exports={
    querys: function(name,res) {
        querys.querys(name,res);
    },
    showModal:function(code,res) {
        showModal.showModal(code,res);
    },
    login:function(user,pass,res) {
        login.login(user,pass,res);
    },
    checkUserPass:function(user,email,res) {
        checkUserPass.checkUserPass(user,email,res);
    },
    insertUser:function(user,pass,name,subName,email,phone,address,res) {
        insertUser.insertUser(user,pass,name,subName,email,phone,address,res);
    },
    insertImageProduct: function(req,res){
        insertImageProduct.insertImageProduct(req,res);

    },
    checkProduct: function(req,res,code,name,file){
       
        checkProduct.checkProduct(req,res,code,name,file);

    },
    insertProduct: function(req,res,code,name,price,file,definition){
        
        insertProduct.insertProduct(req,res,code,name,price,file,definition);
 
     },
     selectOneProduct: function(req,res,code){
        
        selectOneProduct.selectOneProduct(req,res,code);
 
     },
     checkEditProduct: function(req,res,codeOld,nameOld,srcOld,code,name,file){
        
        checkEditProduct.checkEditProduct(req,res,codeOld,nameOld,srcOld,code,name,file);
 
     }, 
     editProduct: function(req,res,codeOld,code,name,price,file,definition){
        
        editProduct.editProduct(req,res,codeOld,code,name,price,file,definition);
 
     },
     editUploadImageProduct: function(req,res){
        editUploadImageProduct.editUploadImageProduct(req,res);

    }
}