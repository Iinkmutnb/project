var querys = require('./showProduct.js');
var showModal = require('./showModal.js');
var login = require('./login.js');
var checkUserPass=require('./checkUserPass.js');
var insertUser=require('./insertUser.js');
module.exports={
    querys: function(name,res) {
        querys.querys(name,res);
    },
    showModal:function(id,res) {
        showModal.showModal(id,res);
    },
    login:function(user,pass,res) {
        login.login(user,pass,res);
    },
    checkUserPass:function(user,email,res) {
        checkUserPass.checkUserPass(user,email,res);
    },
    insertUser:function(user,pass,name,subName,email,phone,address,res) {
        insertUser.insertUser(user,pass,name,subName,email,phone,address,res);
    }


}