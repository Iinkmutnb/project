var connection = require('./connectDatabase.js');

var connection =connection.connection();

module.exports={
  showModal: function(id,res) {
      
    connection.query("SELECT * FROM product where id ='"+id+"'", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(result);
       });

  }

}