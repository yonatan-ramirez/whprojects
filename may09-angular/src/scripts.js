const value = 5;
document.getElementById('test').innerHTML = 'it worked';

const warn = document.querySelector('#warning');

if(value < 10){
    warn.innerHTML = "WARNING: TOO LOW!!"
}
const colors = [ 'red', 'orange','yellow', 'green'];

let result = ''; 

    colors.forEach(eachColor => {
        // result = result + ' ' + eachColor;
        letnewP = document.createElement('p');
        newP.innerHTML = eachColor;
        result.appendChild(newP);
    });



document.getElementById('colors').innerHTML = 'result';