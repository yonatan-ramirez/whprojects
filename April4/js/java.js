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
var info = document.querySelector('h1');
document.getElementById('btn1').addEventListener('click', getColor);
function printInfo(textInfo){
    info.innerHTML = textInfo;
}


function getColor(){
    // printInfo("Type one color! Blue , Yellow , Red");
    var color = document.getElementById('answer').value;
    if(color == "blue"){
        var blue= prompt("Pick one more color! Yellow, Red");
        if(blue == "yellow"){
            alert("You made Green!");
        }else if(blue == "Red"){
            alert("You made Purple!");
        }else{
            alert("Error!");
        }

    }else if(color == "yellow"){
        var yellow = prompt("Pick one more color! Blue, Red");
        if(yellow == "Blue"){
            alert("You made Green!");
        }else if(yellow == "Red"){
            alert("You made Orange!");
        }else{
            alert("Error!");
        }

    }else if(color == "red"){
        var red = prompt("Pick one more color! Yellow, Blue");
        if(red == "Yellow"){
            alert("You made Orange!");
        }else if(red == "Blue"){
            alert("You made Purple!");
        }else{
            alert("Error!");
        }
}
    // else{
    //     alert("Error!");
    // }
}
getColor();