var querys = require('./showProduct.js');
var showModal = require('./showModal.js');
var login = require('./login.js');
var checkUser=require('./checkUser.js');

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
    checkUser:function(user,res) {
        checkUser.checkUser(user,res);
    }


}