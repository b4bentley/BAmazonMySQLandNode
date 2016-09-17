var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');

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


startConnection.query('select * from Products', function(err,rows){

//initial print each product 
    for(var i =0; i<rows.length; i++){
        console.log(rows[i].itemId + "\t" + rows[i].productName + "\t\t" + rows[i].price);
    }

//call the userPromptProchase function
    userPromptPurchase();
});

//userPromptPurchase function 
function userPromptPurchase(){

//call the inquirer npm package to prompt the user
 inquirer.prompt([
//will ask both question as a object array [{},{}]
// first question
        {
            name: "id",
            type: "input",
            message: "Please provide the productID for the item you would like to Purchase:",
            validate: function(value) {

                //Validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease provide the productID for the item you would like to Purchase:\n");
                    return false;
                }
            }
        },

//second question
        {
            name: "qty",
            type: "input",
            message: "How many whould you like to purchase:",
            validate: function(value) {
                //validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid quantity\n");
                    return false;
                }
            }
        }
    ]).then(function(answer) {

            //Queries the database for the desired id and qty
        startConnection.query("SELECT * FROM Products WHERE ?", [{itemID: answer.id}], function(err, data) {
                if (err) throw err;
                //console check to see if the data was being received from query result
                //console.log(data);

                if(data[0].stockQuantity < answer.qty){
                    //check to see if the check works
                    //console.log("made it the if statement true");
                    console.log("Sorry not enough qty in stock \n");
                    console.log("Please select another product id or lower quantity");
                    userPromptPurchase();
                }else{
                    //check if you made it past the check
                    console.log('success');
                }
        });


    });
};

// startConnection.end();