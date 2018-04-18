var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');

// ! == not
// for(var i = 0; 1 < paras.length; i++){
//     // console.log(paras[0].classList.contains('para'));
//     if(!0){
//         console.log('thats not true');
//     }
// }

// console.log(3 == '3');
// console.log(typeof(3));
// console.log(typeof('3'));

// == is a loose comparison
// === strict comparison

// var usernum = parseInt(prompt('pick a number'));

// if(!usernum){
//     console.log(3 + usernum);
// }else{
//     console.log('please enter something');
// }


// if(typeof(usernum) == 'number'){
    //     console.log(3 + usernum);
    // }
    // console.log(3 + usernum);

    // XMLHttpRequest
var weatherKey = 'cef33648f8bd9f44cbe25da932f818f7'
var myUl = document.querySelector('ul');
console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cef33648f8bd9f44cbe25da932f818f7');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    console.log(data.list);
    for(var i = 0; i < data.list.length; i++){
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi = `
        <li>
            <p>${weatherDesc}</p>
        </li>
        `;
        myUl.innerHTML += myLi;
    }
}