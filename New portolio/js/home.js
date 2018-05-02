var spans = document.getElementById('sp');
var codes = ['CSS','JavaScript','HTML'];
var timer = setInterval(change, 3000);
var i = 0;

function change(){
    spans.textContent = codes[i]; i++;
    spans.style.color = 'red';
    spans.style.fontStyle = 'italic';
    if(i >= codes.length){
        i = 0;
    }
}
// for(var i = 0; i < spans.length; i++){
//     switch(spans[i].className){
//         case 'codes':
//         spans[i].textContent = codes[getRandNum(codes.length)];
//         spans[i].style.color = 'red';
//         spans[i].style.fontStyle = 'italic';
        
//     }
// }
// function getRandNum(num){
//     return Math.floor(Math.random()* num);
// }