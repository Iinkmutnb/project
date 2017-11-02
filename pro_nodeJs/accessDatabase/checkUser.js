var connection = require('./connectDatabase.js');

var connection =connection.connection();

module.exports={
  checkUser: function(user,res) {
      
    connection.query("SELECT * FROM customer where user ='"+user+"'", function (err, result, fields) {
        if (err) throw err;
      
        if(result==''){
            res.setHeader('Access-Control-Allow-Origin', '*');
            
            res.json({'user':true});

        }else{
            res.setHeader('Access-Control-Allow-Origin', '*');
            
            res.json({'user':false});

        }
    
     
        
    });

  }

}