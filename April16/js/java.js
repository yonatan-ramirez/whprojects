
// var theDate= new Date();
// console.log(theDate.getDate());
// console.log(theDate.getDay());
// console.log(theDate.getFullYear());
// console.log(theDate.getMonth());

// console.log(theDate.toLocaleDateString('en-us', {month: 'long'}));

// long = April, short = Apr ^^ 
// Makting 5 console.los to a sinlg string
// var dateStr = `
//     Today's date is ${theDate.getDate()} the of ${theDate.toLocaleDateString('en-us', {month: 'long'})} ${theDate.getFullYear()}
// `;

// document.body.textContent = dateStr;

// into this format -----> 07/30/98
// var myBday = new Date(1998, 6, 30)

// var bDayStr = `
//     My Birth day is 
//     ${myBday.toLocaleDateString('en-us', {month: '2-digit'})}/${myBday.toLocaleDateString('en-us', {day: '2-digit'})}/${myBday.toLocaleDateString('en-us', {year: '2-digit'})}
//     `;
//     document.body.textContent = bDayStr;


var stopbtn = document.querySelector('button');
stopbtn.addEventListener('click',function(){
    clearInterval(myTimer);
    clearTimeout(myDelay);
});

// SetInterval Function
var myTimer = setInterval(updateTimer, 1000);

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleDateString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;

    document.querySelector('h3').textContent = timeStr;
}

// setTimeout Function
var myDelay = setTimeout(hiliteBg, 5000);

    function hiliteBg(){
        document.body.classList.add('hilite');
    }

function runTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleDateString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;

    document.querySelector('h3').textContent = timeStr;
}