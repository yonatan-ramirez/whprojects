let person = {
    firstName: 'johnny',
    lastName: 'Ram',
    age: 19,
    eyeColor: 'Black',
};
let person2 = {
    firstName: 'Eric',
    lastName: 'Ram',
    age: 20,
    eyeColor: 'Brown',
};
let People = function(fn, ln, a, ec){
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyeColor = ec;
    this.greeting = function(ufn){
       return `It's nice to meet you ${ufn}! My name is ${this.firstName}`
    };
};
let johnny = new People("Johnny", "Ram", 19, "Brown");
let chuck = new People('BatMan', 'Cyborg', 'Shazam', 'MartianManhunter');

console.log(johnny, chuck);
console.log(johnny.greeting('WonderWomen'));
console.log(chuck.greeting('SuperMan'));

// People.prototype.nationality = "American";
// console.log(johnny);



// var myName = "johnny";
// console.log(myName);