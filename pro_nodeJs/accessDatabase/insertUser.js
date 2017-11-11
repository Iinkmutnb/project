var connection = require('./connectDatabase.js');

var connection =connection.connection();




module.exports={
    insertUser: function(user,pass,name,subName,email,phone,address,res) {
     connection.query("INSERT INTO customer values(?,?,?,?,?,?,?)",[user,pass,name,subName,email,phone,address] ,function (err, result, fields) {
        if (err) { res.setHeader('Access-Control-Allow-Origin', '*'); return (res.json({'qreury':false}))}
        
                //console.log(result);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({'qreury':true});
               });

    
     

   
 
    }

}
