// function welcomeMsg(str){
//     // console.log(str);
//     return "Welcome " + str;
// }

// // consoleIngo('Johnny');
// console.log( welcomeMsg('Johnny') );

// function calcNums(x, y){
//     // console.log(x + y);
//     return x + y;
// }

// console.log(calcNums(3 , 2) );
// // calcNums(3 , 2);
// // ----------------
// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');

// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }
// function getFirstname(){
//     return prompt('what is your first name?');

// }
// function getLastname(){
//  return prompt('what is your last name?');
// }
// user.textContent = concatStrings(getFirstname(), getLastname());
// html.innerHTML = concatStrings( getFirstname(), getLastname() );
// function welcomeUser(){
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );

// }
// welcomeUser();

// ---------------------
var spans = document.querySelectorAll('span');
var occupation = ['janitor', 'teacher', 'developer', 'plumber', 'cashier'];
var plural = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjective = ['happy', 'unsightly', 'goofy', 'windy'];
var verb = ['mend', 'jump', 'shelter', 'heat'];
var liquid = ['water', 'oil', 'gas', 'sweat'];
var famous = ['arnold S', ' JFK', ' Serena W', 'Thomas E'];
var place = ['Tokyo', 'New York', 'L.A', 'Fresno'];
var noun = ['car','morning','airport','coal'];
var nationality = ['Brazil','Russia','Japan','Germany'];
var celebrity = ['Kourteny K','Scarlett J','Golshiften F','Bella Throne'];
var friend = ['Jane','Jill','Emily','Amy'];
var plural = ['insurance','appliance','fruit','fish'];
var number = ['3','7','9','12'];


// console.log(spans.length);

for(var i = 0; i < spans.length; i++){
    // console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
    //     spans[i].style.color = 'red';
    // }
// -------Switch statement!
    switch(spans[i].className){
        case 'occupation':
            spans[i].textContent = occupation[getRandNum(occupation.length)] ;
            break;
        case 'plural':
            // spans[i].style.color = 'red';
           spans[i].textContent= plural[getRandNum(plural.length)];
            break;
        case 'adjective':
            // spans[i].style.color = 'green';
            spans[i].textContent = adjective[getRandNum(adjective.length)];
            break;
        case 'verb':
            spans[i].textContent = verb[getRandNum(verb.length)];
            break;
        case 'liquid':
            spans[i].textContent = liquid[getRandNum(liquid.length)];
            break;
        case 'famous':
            spans[i].textContent = famous[getRandNum(famous.length)];
            break;
        case 'place':
            spans[i].textContent = place[getRandNum(place.length)];
            break;   
        case 'noun':
            spans[i].textContent = noun[getRandNum(noun.length)];
            break;
        case 'nationality':
            spans[i].textContent = nationality[getRandNum(nationality.length)];
            break;
        case 'celebrity':
            spans[i].textContent = celebrity[getRandNum(celebrity.length)];
            break;
        case 'friend':
            spans[i].textContent = friend[getRandNum(friend.length)];
            break;
        case 'plural':
            spans[i].textContent = plural[getRandNum(plural.length)];
            break;
        case 'number':
            spans[i].textContent = number[getRandNum(number.length)];
            break;
        default:
            // spans[i].style.color = 'yellow';  
    }
}
function getRandNum(num){
    return Math.floor(Math.random() * num);
    

}