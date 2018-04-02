// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q =document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.getElementById('.p');
// console.log(pClass);

// var pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color ='pink';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[1].style.fontSize = '50px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].stlye.color = 'yellow';
// console.log(pByTagname.length);

//For loop
//|----------------|ARGUMENTS
//|------------- New Variable
//|----|Number of loops
//|-|Incrementor
// for(var i = 0; i < 10; i++){
//     pByTagname[i].style.color = 'purple';
//     console.log(i);
// }



// create new var with name
// using the length of your name
// console each index to the browser

// var myName = "Yonatan";
// console.log(myName.length);

// for(var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myname[i]);
// }


// Create a function that prompts the user for their name

// Create a separate function that loops through each letter logging in to the browser
// function func1(){
//        var getUsersName = prompt("What is your name?");

//        func2(getUsersName);
// }
// func1();
// // getUsersName();
// function func2(getUsersName){
// console.log(getUsersName.length);
//     for(var i = 0; i < getUsersName.length; i++){
//         console.log(i);
//         console.log(getUsersName[i]);
//         }
// }
/*
function func1(){

    func2(passusresName){

    }
}
function func2(getUsersName){
    console.log(getUsersName);

}
*/

// get users two number
// function getUserNums(){
//     var num1 =prompt ('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);

// }

// // alert added numbers
// function addUserNums(x, y){
//     console.log(arguments);
//     // alert(parseInt(x) + parseInt(y) );
// }
// getUserNums();

// write a function that asks the user for three colors
// write another function that loops through "arguments" array 
// apply each color to corresponding paragraph
/*
['p', 'p', 'p']
['red', 'green', 'blue']
p1.color = red
p2.color = green
p3.color = blue
*/

// // Three colors
var paragraphs = document.querySelectorAll('p');

function getUserColors(){
    var color1 = prompt("First color?");
    var color2 = prompt("Second color?");
    var color3 = prompt("Third color?");
    
    assignUserColors(color1, color2, color3);
}

function assignUserColors(x, y, z){
    for(var i = 0; i < arguments.length; i++){
        paragraphs[i].style.color = arguments[i];
    }

}
getUserColors();