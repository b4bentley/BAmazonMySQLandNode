var mysql = require('mysql');
var prompt = require('prompt');

var startConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "whomee69", //Your password
    database: "Bamazon"
});

//initial connection to check if you can reach the database
startConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection to Bamazon has been established');
});

