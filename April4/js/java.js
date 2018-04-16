// var firstName= prompt("What is your first name?");
// var lastName= prompt("What is your last name?")
// document.getElementById('user').innerHTML = firstName + " " + lastName;
// document.getElementById('user').style.fontSize= "24px";
// document.getElementById('user').style.color = "blue";
 /*
function getUserName(){
    var username = prompt("What is your full name?").split(" ");
    // var splitUsername = username.split(" ");
    // console.log(username);
    outputUsername(username);
}
function outputUsername(nameArray){
    // console.log(nameArray)
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.legth - 1];

    // Or ||
    for(var i = 0; i < nameArray.length; i++){
        if( i == 0 || i == nameArray.length - 1 ){
            console.log("We got the zeroth element!", nameArray[i]);
            document.getElementById('firstname').innerHTML += nameArray[i] + "";
        }else{
            console.log("not the zeroth");
        }
    }
}
getUserName();
*/

// Arrays


// var cars = ["jeep", "subaru", "honda"];
// console.log(cars[1]); //get the second element
// console.log(cars.length); // how many elements

// // Push Method!
// cars.push("bmw"); //add to array
// console.log(cars);

// // Pop Method!
// cars.pop();
// console.log(cars);

// // Remove Method!
// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);

// // to add in font of an Array!
// // Unshift Method!
// cars.unshift("Chevy");
// console.log(cars);

// // Shift Method!
// cars.shift();
// console.log(cars);

// // Splice Method!
// cars.splice(1, 1, "red", "green");
// console.log(cars);

// cars.splice(1, 1, "Grape", "Banana", "Apple", "Kiwi", "Orange");
// console.log(cars);

// cars.splice(2, 1);
// console.log(cars);

// // Slice Method! (Non-Destructive!)
// cars.slice(4);
// var removed = cars.slice(4)
// console.log(cars);
// console.log(removed);


/*
1. Create an array of 5 movies
2.At the beginning of the array, add "Die Hard"
3. Remove the 3rd and 4th movies, and in their place, put "Godfather I", "Godfather II", "Godfather III"
4. Add "Guardians of the Galaxy" to the end
---------------------------------
5.Duplicate Index 1 - 3 into a new array.
6.Remove the first movie from Original array
7.Console the second to last movie

Bonus 
8. Delete everything and add Jurassic Park

*/
// var movies = ["Fast and Furious", "Space Jam", "Tom & Jerry", "Wall-E", "Toy Story"];
// console.log(movies);

// movies.unshift("Die Hard");
// console.log(movies);

// movies.splice(2,2, "Godfather I", "Godfather II", "Godfather III");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// movies.splice(3,6);
// console.log(movies);

// movies.splice(0,1);
// console.log(movies);

// movies.reverse();
// console.log(movies);

// movies.unshift("Jurassic Park");
// console.log(movies);

// movies.splice(1,2);
// console.log(movies);


// If - Else If - Else
// function getUserAge(){
//     var userage = parseInt(prompt("how old are you?"));

//     if(userage < 21){
//         console.log("Not old enough");
//     }else if(userage == 21){
//         console.log("good to go");
//     }else{
//         console.log("plenty old");
//     }
// }
// getUserAge();

// // Ternary Operator
// function getAge(){
//     var age = prompt("whats your age again?");
//     (age >= "21") ? console.log('true') : console.log('false');
// }
// getAge();



// Write a funtion and propt the user telling the user a "story" asking for 1 of 3 choices
// each choice continue to their own function
// wash rinse repeat thrice more

// Simple Version:
// alerts, prompts, conflrms
// if/ else if / else

// Complex version:
// loops
// arrays
var info = document.getElementById('one');
var div= document.getElementById('div');
var div2 = document.getElementById('div2');
var two= document.getElementById('two');
var li = document.getElementById('li');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var btn2 = document.getElementById('btnAppear');
var fC = document.getElementById('finColor');
var dS = document.getElementById('disColor');
document.getElementById('btn1').addEventListener('click', getColor);
// function printInfo(textInfo){
//     info.innerHTML = "Type one color!";
// }

// printInfo();
function getColor(){
    // printInfo("Type one color! Blue , Yellow , Red");
    var color = document.getElementById('answer').value;
    if(color == "blue"){  
        li.style.backgroundColor= "blue";
        two.innerHTML= "Your first color was Blue!";
        var first = prompt('Another! Yellow or Red?');
        if(first == "yellow"){
            li1.innerHTML= "your second color was Yellow!";
            li2.style.backgroundColor = "yellow";
            li3.innerHTML= "together makes Green!"
            li4.style.backgroundColor= "green";
        }else if(first == "red"){
            li1.innerHTML="your second color was Red!";
            li2.style.backgroundColor="red";
            li3.innerHTML= "together makes Purple!";
            li4.style.backgroundColor= "purple";
        }
    
        // else{
        //     alert("Error!");
        // }

    }else if(color == "yellow"){
        li.style.backgroundColor= "Yellow";
        two.innerHTML= "Your first color was Yellow!";
        var yellow = prompt('Another! Blue or Red?');
        if(yellow == "blue"){
         li1.innerHTML= "Your second color was Blue!";
         li2.style.backgroundColor = "blue";
         li3.innerHTML = "together makes Green!";
         li4.style.backgroundColor = "green";
        }else if(yellow == "red"){
         li1.innerHTML = "Your second color was Red!";
         li2.style.backgroundColor = " red";
         li3.innerHTML= "together makes orange!";
         li4.style.backgroundColor = "orange";
        }else{
            alert("Error!");
        }

    }else if(color == "red"){
        two.innerHTML = "Your first color was Red!";
        li.style.backgroundColor=" red";
        var red= prompt("Another! Yellow or Blue");
        if(red == "yellow"){
            li1.innerHTML = "Your second color was Yellow!";
            li2.style.backgroundColor= "yellow";
            li3.innerHTML = "together makes Orange";
            li4.style.backgroundColor = "orange";
        }else if(red == "blue"){
            li1.innerHTML = "Your second color was Blue!";
            li2.style.backgroundColor= "blue";
            li3.innerHTML= "together will make purple!";
            li4.style.backgroundColor="purple";
        }else{
            alert("Error!");
        }
}
    // else{
    //     alert("Error!");
    // }
}
getColor();

