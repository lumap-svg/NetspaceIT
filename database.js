const mysql = require('mysql');
var connetion = mysql.createConnection({
    host : 'localhost',
    database : 'testing',
    user : 'root',
    password: ''
});

connetion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('database connection successful');
    }
});
module.exports = connetion;