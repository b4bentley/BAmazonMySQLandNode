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


startConnection.query('SELECT itemID, productName, price FROM Products',function(err,rows){
    if(err) {
        throw err;
    }
    console.log('Query to view itemID, productName, and price:\n');
    console.log(rows);

    prompt.start();

    console.log("Please enter the ID of the product they would like to buy.");
    console.log("Please enter how many units of the product you would like to buy.")

    prompt.get(['itemID', 'stockQuantity'], function (err, result) {

        var ID = result.itemID;
        var quantity = result.stockQuantity;
        console.log('the Id for the product you selected is: ' + ID);
        console.log('the quantity for the product you selected is: ' + quantity);


    });
});

startConnection.end();