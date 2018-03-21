function welcome(){
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML= username;
}

// welcome();

function fireworks(){
    document.getElementById('h1').style.backgroundImage = "url('../image/rocket-ship.png')";
    document.getElementById('h1').style.color ="white";
    toggleColor();
}
function navcolor(){
    document.getElementById('nav').style.backgroundImage = "url('../image/stars.jpg')";
    toggleColor2();
}

function toggleColor(){
    // document.body.classList.add('colorize');
    document.body.classList.toggle('colorize');
}
function toggleColor2(){
    document.getElementById("nav").classList.toggle('colorize2');
}

