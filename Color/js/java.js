var info = document.getElementById('one');
var div= document.getElementById('div');
var div2 = document.getElementById('div2');
var two= document.getElementById('two');
var li = document.getElementById('li');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var btn2 = document.getElementById('btnAppear');
var fC = document.getElementById('finColor');
var dS = document.getElementById('disColor');
document.getElementById('btn1').addEventListener('click', getColor);
// function printInfo(textInfo){
//     info.innerHTML = "Type one color!";
// }

// printInfo();
function getColor(){
    // printInfo("Type one color! Blue , Yellow , Red");
    var color = document.getElementById('answer').value;
    if(color == "blue"){  
        li.style.backgroundColor= "blue";
        two.innerHTML= "Your first color was Blue!";
        var first = prompt('Another! Yellow or Red?');
        if(first == "yellow"){
            li1.innerHTML= "your second color was Yellow!";
            li2.style.backgroundColor = "yellow";
            li3.innerHTML= "together makes Green!"
            li4.style.backgroundColor= "green";
        }else if(first == "red"){
            li1.innerHTML="your second color was Red!";
            li2.style.backgroundColor="red";
            li3.innerHTML= "together makes Purple!";
            li4.style.backgroundColor= "purple";
        }
    
        // else{
        //     alert("Error!");
        // }

    }else if(color == "yellow"){
        li.style.backgroundColor= "Yellow";
        two.innerHTML= "Your first color was Yellow!";
        var yellow = prompt('Another! Blue or Red?');
        if(yellow == "blue"){
         li1.innerHTML= "Your second color was Blue!";
         li2.style.backgroundColor = "blue";
         li3.innerHTML = "together makes Green!";
         li4.style.backgroundColor = "green";
        }else if(yellow == "red"){
         li1.innerHTML = "Your second color was Red!";
         li2.style.backgroundColor = " red";
         li3.innerHTML= "together makes orange!";
         li4.style.backgroundColor = "orange";
        }else{
            alert("Error!");
        }

    }else if(color == "red"){
        two.innerHTML = "Your first color was Red!";
        li.style.backgroundColor=" red";
        var red= prompt("Another! Yellow or Blue");
        if(red == "yellow"){
            li1.innerHTML = "Your second color was Yellow!";
            li2.style.backgroundColor= "yellow";
            li3.innerHTML = "together makes Orange";
            li4.style.backgroundColor = "orange";
        }else if(red == "blue"){
            li1.innerHTML = "Your second color was Blue!";
            li2.style.backgroundColor= "blue";
            li3.innerHTML= "together will make purple!";
            li4.style.backgroundColor="purple";
        }else{
            alert("Error!");
        }
}
    // else{
    //     alert("Error!");
    // }
}
getColor();