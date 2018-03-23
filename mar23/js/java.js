var body = document.getElementById("body");
var nav =  document.getElementById("nav");
var main = document.getElementById("main");
var h1 = document.getElementById("h1");
var para = document.getElementById("para");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn3.addEventListener("click", display);

function btnfun1(){
   var name = prompt("What is your name?");
   document.getElementById("h1").innerHTML = name;
}
h1();

function btnfun2(){
    document.getElementById("h1").style.color = "red";
    document.getElementById("h1").style.fontSize = "50px";
}
function display(){
    btn3.classList.toggle("active");
    // nav.classList.toggle()
    

}
