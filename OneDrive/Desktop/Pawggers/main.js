var dictOfUsers = [
    {email: "raghav4", password:"yellow"}
]
//returning user
function beginLogin() {
    //get info. from user
    let inputEmail = document.getElementById("getEmail").value;
    let inputPassword = document.getElementById("getPassword").value;

    for (let i = 0; i < dictOfUsers.length; i++){
        //going to check whether or not the email exists in the dictOfUsers variable
        if(inputEmail == dictOfUsers[i].email && inputPassword == dictOfUsers[i].password){
            //ID is found
            console.log("YOU'RE ID EXISTS IN THE SYSTEM");
            return;
        } else {
            //ID is not found
            console.log("ID not found");
            return;
        }
    }
}

function registerUser(){
    let registerEmail = document.getElementById("getEmail").value;
    let registerPassword = document.getElementById("getPassword").value;
    let newUser = {
        email: registerEmail,
        password: registerPassword
    }

    for (let i=0; i < dictOfUsers.length; i++){
        if(registerEmail == dictOfUsers[i].email){
            alert("email already is use, pick another.");
            return;
        } else {
            dictOfUsers.push(newUser);
            console.log(dictOfUsers);
            return;
        }
    }
    
}

