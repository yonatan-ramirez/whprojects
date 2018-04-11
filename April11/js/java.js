
// This - context based. Look to the left of the dot.
var btns = document.querySelectorAll('btn');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        // console.log(evt.target);
        // conosle.log(this);
    });
}


window.addEventListener('click', function(evt){
    // console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        // console.log(evt.target);
        // console.log(this);
    }
});

var cars = ['Jeep', 'Ford', 'Chevy', 'Honda'];
// console.log(cars);

// objects

var car = {
    type: 'Jeep',
    model: 'Wrangler',
    color: 'Yellow',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

// firstname, lastname, height, hair , haircolor, facialhair, facial hair color, age

var john = {
    firstN: 'Yonatan',
    lastM: 'Ramirez',
    height: "5'7",
    hair: true,
    hairColor: 'black',
    facialhair: true,
    facialhairColor: 'black',
    age: '19',
    greeting: function(msg){
        console.log(this.firstN);
        console.log(msg + " "+ this.firstN);
    }
}
var types = ['string', true, 5, [1, 2, 3], john];
// console.log(john);
john.greeting("Hello!");
john.firstN = "Burce";
john.greeting ("I'm now");

// Object Constructor Function
function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        console.log(msg + " " + this.firstname);
    }
}

var myDad = new Person('Ezi', 'Ramirez', 62, 'brown');

var friend = new Person('Andrew', 'Arius', 19, 'black');

var myMom = new Person('Ana', 'Ramirez', 58, 'Black');

friend.greeting("Hello!");

/*
username
email
password
*/
var form = document.querySelector('form');
var users = [];
var user = 0;

function User(user, email, password){
    this.username = user;
    this.email = email;
    this.password = password;
    // this.greeting = function(msg){
    //     console.log(msg + " " + this.username);
    // }
}
// targeting the submit VVV
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    // user = user++;
    users.push(
        new User(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
        )
    );
    console.log(users);
    // user++;
    // for(var i = 0; i < form.elements.length -1; i++){
    
    // console.log(form.elements[i].value);
// }
    // console.log(users);
    // users[user] = new User(e,u,p);
});
// console.log(submitBtn);


