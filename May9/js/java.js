// var firstname = 'johnny';
// var lastname = 'ramirez';

// function whatsName(){
//     console.log(firstname);
//     // whatsLastName(lastname);
// }
// whatsName();
// // console.log(lastname);

// const name = 'johnny';
// let color = 'green';
// for(var i = 0; 1 < 5; i++) {
//     console.log('running' + i + ' times');
// }
// function whatsLastName(){
//     console.log(str);
//     console.log(i);
// }
// console.log(name, color);
// color = 'red';
// console.log(color);

// // for( i; i < 10; i ++){
// //     console.log('running again' + i + ' times');
// // }
// let firstName = 'johnny';
// let lastName = 'ram';
// let  nameCombined = `${firstName} johnny ${lastName}`;
// console.log(nameCombined);


// let btn = document.querySelector('button');
// btn.addEventListener('click', function(evt){
//     console.log(this);
//    var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str){
//     console.log(str);
//     console.log(this);
//     return () = > console.log(this);
// }
// logCase('johnny');

var btn = document.querySelector('button');
btn.addEventListener('click', function(evt){
    // console.log(this);
    var colorC = function(){
        btn.style.color = 'blue';
        //this.style.color = 'blue';
        btn.style.backgroundColor = 'green';
    }
    colorC();
})

var colors = ['red', 'orange', 'green', 'blue'];

for(let i = 0; i < colors.length; i++){

}

colors.forEach(function(x, y){
    console.log(x, y);
});

//for of loop
var nums = [10, 20, 30, 40];
for(let num of nums){
    num += 1;
    console.log(num);
}
let myName = 'Johnny Ram';
for(let letter of myName){
    console.log(letter);
}

var car = ['ford', 'jeep', 'chevy'];
for(let cer of car){
    console.log(cer);
}