var dictOfUsers = [
    //{email: "raghav4", password:"yellow"},
    //{email: "Hetang2", password:"blue"},
    {email: "", password: ""}
]

var emptydictOfUsers = [
    //{email: "raghav4", password:"yellow"},
    //{email: "Hetang2", password:"blue"},
    {email: "", password: ""}
]
//returning user
function beginLogin() {
    //get info. from user
    let inputEmail = document.getElementById("getEmail").value;
    let inputPassword = document.getElementById("getPassword").value;

    for (let i = 0; i <= dictOfUsers.length; i++){
        //going to check whether or not the email exists in the dictOfUsers variable
        if(inputEmail == dictOfUsers[i].email && inputPassword == dictOfUsers[i].password){
            //ID is found
            console.log("YOU'RE ID EXISTS IN THE SYSTEM");
            return;
        } else if(inputEmail == dictOfUsers[i].email && inputPassword != dictOfUsers[i].password){
            console.log("your account exists, but your password is wrong.");
            return;
        }
    }

}

function registerUser(){
    let registerEmail = document.getElementById("getNewEmail").value;
    let registerPassword = document.getElementById("getNewPassword").value;

    for (let i=0; i <= dictOfUsers.length; i++){
        if(registerEmail == dictOfUsers[i].email){
            alert("email already is use, pick another.");
            return;
        }
        else{
            dictOfUsers.push({email: registerEmail, password: registerPassword});
            console.log(dictOfUsers);
            return;
        }
    }

    
        
}


