/*
    *Math Object!
*/
/*
    //Integers- Whole numbers
    //Floats - Deciamls
*/
// console.log(.1 * .3);
// 0.03
// Nearly the same as console.log(), but for math!
// var wha = .1 *.2;
// // 0.020000000000004

// // Math.round()
// var rounded = Math.round(0.00000000001);
// // .39 && below rounds down
// // .5 && up rounds up

// // Math.ceil();
// var roundedUp = Math.ceil(0.00000000001);

// // Math.floor()
// var roundedDown = Math.floor(0.999999999999);

// // Math.PI();
// var pi = Math.PI;

// // Math.pow()
// console.log(Math.pow(8.2));

// // Math.sqrt()
// console.log(Math.sqrt(64) );

// // Math.random()
// console.log(Math.random() );

// console.log('.round():' + rounded, 'ceil():' + roundedUp,'.floor():' + roundedDown, '.PI():' + pi);

// Math.log(rounded);

/**
 * Random Number Generator!
 */

//  var rand = Math.random();
//  rand = Math.floor(rand* 11);
//  console.log( rand );

//  function pickANum(){
//     var userNum = prompt('guess my number between 0 and 10');
//     checkNum(userNum);
// }
// function pickAnotherNum(){
//     car userNum = 
// }
// pickANum();
// function checkNum(num){
//    if(num < rand){
//        printUserRes(num + 'is too low!');
//        checkNum(userNum);
//    } 
//    else if(numb > rand){
//        printUserRes(num + 'is too high. Pick again!');
//        pickAnotherNum();
//    }else{
//        printUserRes(num + 'is the right number! You win!');
//    }
// }

var userPick = document.getElementById('userPick');
var submitBtn = document.getElementById('submit');
var userPickRes = document.querySelector('h1');
var resetBtn = document.getElementById('reset');

submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);
// Global Variable
var rand;
var attempts = 3;


function getRandNum(){
    getRandColor();
    attempts = 3;
    userPick.innerHTML = '';
    userPick.value ='';
    rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
}
getRandNum();

//  This is not in the right place
// var rand = Math.random();
// rand = Math.floor(rand * 11);

function getUserPick(){
    attempts = attempts - 1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
    
}

function checkUserPick(x){
  if(attempts > 0){
    if(x < rand){
        printUserRes(x + 'is too low!');
        // checkNum(userNum);
    } 
    else if(x > rand){
        printUserRes(x + 'is too high. Pick again!');
        // pickAnotherNum();
    }else if(x == rand){
        printUserRes(x + 'is the right number! You win!');
    }else{
        printUserRes('Wrong answer!');
    }
}else{
    printUserRes('Game Over');
}
}
function printUserRes(userRes){
    userPickRes.innerHTML = userRes;
}
// function printUserRes(userRes){
//     h1.innerHTML = userRes;
// }

// add another button that will run a funtion that will RESET the number

// On load, pick a new random number 
// after number has been picked
// run a funtion that sets the background-color
// hls(x, 50%, 50%);
var randColor

function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl('+ randColor + ', 50%, 50%)';
    console.log(randColor);
}
getRandColor();

console.log(window);
window.addEventListener('mousemove', function(e){
        var width = Math.round((e.x/window.innerWidth) * 100);var height = Math.round((e.y/window.innerHeight) * 100);
        document.body.style.backgroundColor = 'hsl(' + randColor +', ' + width+ '%, ' +height +'%)';
        
        // document.body.style.backgroundColor = 'hsl(%{randColor}, ${width}%, ${height}%)';
})