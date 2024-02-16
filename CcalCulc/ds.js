import {JSONToArray} from"./moduls/jsonToArr.js"

function addUserInfo()
{
  
    const name = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const birth = document.getElementById("birth");
    const  weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const gender = document.getElementById("gender");

    let userData = JSON.parse(localStorage.getItem("newUserData"));
 
    console.log(userData)
    let newUser=
    {       
        name: name.value+" "+lname.value,
        birth:birth.value,
        age : parseInt(new Date().getFullYear())-parseInt(new Date(birth.value).getFullYear()),
        gender: gender.value,
        weight: weight.value,
        height: height.value,
        login: userData.login,
        email: userData.mail,
        pass: userData.pass
    }
    
    let arr = [];
    arr = JSONToArray(JSON.parse(localStorage.getItem("Users")));
     arr.push(newUser);

    localStorage.removeItem("newUserData")

    localStorage.setItem("Users",JSON.stringify(arr));

    location.replace("userpage.html");

    
}
document.getElementById("confBtn").addEventListener("click",addUserInfo)

