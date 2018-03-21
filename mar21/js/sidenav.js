var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");
// --Target Element by Variable (var)--
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

/* 
    Listener when you click on a area like a button
    Event Listener needs two things
    -what event (ie: Click, hover, etc)
    -What function to run
*/
navBtn.addEventListener("click", showNav);

function showNav(){
    navBtn.classList.toggle("active");
    nav.classList.toggle("viewNav");    
}