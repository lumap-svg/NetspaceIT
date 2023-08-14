var express = require('express');
var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Netspace kenya' });
});
router.post("/signup", function(req, response, next){

const username = req.body.name;
const password = req.body.password;
	
		var sql = "SELECT * FROM Admin WHERE Username = ? AND Password = ?";

		database.query(sql,[username, password], function(error, data){
      if (data[0] == null || error!=null )
      {
        console.log(error);
      }
      else{
        response.render('sample_data', {title : 'CLIENTS INFORMATION'});
      }
		});
	
});

module.exports = router;
