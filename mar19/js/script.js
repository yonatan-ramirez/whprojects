// document.getElementById('btn2').style.color = "red";

// document.getElementById('btn2').style.fontSize = "30px";

// --types of console log commands
// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger Will Robinson");
// console.error("Uh Oh. You didn't say the magic words!");

// --browser alert
// alert('Here is my popup.');

    // ---browser confirm box
// --This will pop-up with Ok and Cancle buttons
// var userResult = confirm("Did you remember to lock your car?");
// --if the command is in "quotes" its a message, if not its a command
// console.log(userResult);

// --browser prompt box
// var userName = prompt("What is your name?");
// console.log(userName);

/* 
Variables
    Must start with lowercase letters!
    -var room;
    Must start with a letter. Never a number first!
    -var room1;
    Can contain underscore.
    -var user_name;
    May use camelCasing
    -var userName;
*/
var username;
var user_name;
var room1;
var userName;
var theUserFirstNameOnly;

// Never put "quotes" on the number
// var stringAge = "27";

// Math
var age = 19;
var decade = 10;
var double = 2; // * (asterisk)
var divide = 4; // / (foward slash)
var newAge = (age + decade) * double / divide;
// --PEMDAS plays a important role!!!!!

console.log(newAge);
// console.log(age + decade);

// Concatination
// var firstName = prompt("what is your first name");
// var lastName = prompt("what is your last name?");
// alert(firstName + " " + lastName);

/* Interpolation
${variable}
*/
// alert(`${firstName} ${lastName}`);

/* prompt user for 
    the make of vehicle
    the year
    the color
    confirm the result
*/
// 3 new varables
// formatting: color, year make.

function getUserVehicle(){
var company = prompt("What company is your vehicle?");
var year = prompt("What year is your vehicle?");
var color = prompt("What color is your vehicle?");

var result = color + ", " + year + " " + company + ".";
alert(result);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}
function primaryUser2(){
    var first = prompt("What is your pet?")
    var second = prompt("What was your favorite cartoon?");
    var third = prompt("what is your favorite color?");
    
    document.getElementById('primaryUser2').innerHTML = first + ", " + second + ", " + third + ".";
}
function primaryUser3(){
    var first = prompt("What is your favorite song?");
    var second = prompt("What is your dream car?");
    var third = prompt("What is your dream job?");

    document.getElementById('primaryUser3').innerHTML = first + ", " + second + ", " + third + ".";
}