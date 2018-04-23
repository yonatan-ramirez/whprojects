// var storagebtn1 = document.querySelector('#btn1');
// var storagebtn2 = document.querySelector('#btn2');
//  storagebtn1.addEventListener('click', setLocalStorage);
//  storagebtn2.addEventListener('click', setSessionStorage);

//  function setLocalStorage(){
//     //  localStorage.setItem('lastname', 'Ramirez');
//      localStorage.setItem('firstname', 'Johnny');
//  }
//  function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'Ford');
//  }

var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details") !== null){
    saveBtn.removeEventListener('click', getUserInfo);
    saveBtn.addEventListener('click', checkPassword);
}else{
    saveBtn.removeEventListener('click', checkPassword);
    saveBtn.addEventListener('click', getUserInfo);
}
// saveBtn.addEventListener('click', getUserInfo);

function getUserInfo(evt){
    evt.preventDefault();

    var radio = document.querySelector('input[type="radio"]:checked').value;
    // console.log('get info');

    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);

    console.log(radio);

    // for(var i = 0; i < radios.length; i++){
    //     var theme = raidos[i].checked.value;
    // }
    // console.log(theme);

    localStorage.setItem("details", JSON.stringify(new UserInfo(username, password, radio)) );
    
}

function UserInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserInfo(){
    if(localStorage.getItem("details") !== null){
        
        document.querySelector('label[for="theme"]').style.display= 'none';

        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector('input[type="text"]').value = userInfo.user;
        // alert('Please enter your password!');
    // console.log(userinfo);
    }
}
// checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();
    // console.log('get info');
    var userName = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userName === userInfo.user && userPass === userInfo.pass){
        alert('Welcome home!');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('please enter proper credentials');
    }
}