function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=W04o1JzeC7_Op_h-qZAM9zaAL2owUfDC`, githubUsers);

    // function githubUsers(data){
    //     console.log(data);
    // }
    // if(evt.key !== undefined &&
    //    evt.key !== 'Backspace' &&
    //    evt.key !== 'Tab'
    // )

    // str += evt.key;

    // console.log(str, searchBox.value);
    // // getCharacter(userSearch);

}