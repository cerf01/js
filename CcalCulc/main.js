import {encryptPass, decryptPass} from "./moduls/crypto.js"
import {isValidObj, isPasswordsSame} from "./moduls/validations.js"
import {setCookie, checkCookie} from "./moduls/cookies.js"
import{isUniqueEmail, isUniqueLogin} from"./moduls/uniqueController.js"
import {JSONToArray} from"./moduls/jsonToArr.js"

document.getElementById("loginLink").addEventListener("click",()=>{
  document.getElementById("loginDiv").style.display = "block";
  document.getElementById("regiDiv").style.display = "none"
});

document.getElementById("regLink").addEventListener("click", ()=>{
   document.getElementById("regiDiv").style.display = "block";
    document.getElementById("loginDiv").style.display = "none"
  });


function createAccount()
{
  let index = 1; 
  const mail = document.getElementById("email");

  const pass = document.getElementById("password");

  const repPass = document.getElementById("repeatPass");

  const login = document.getElementById("regLogin");

  const errorsText = document.querySelectorAll(".error-text")

   if(!isUniqueLogin(login.value))
      return;
   if(!isUniqueEmail(mail.value))
      return;
  if(!isValidObj(login, index++))
    {
      errorsText[0].style.display = "block";
       return;
    }
  if(!isValidObj(mail, index++))
    {
      errorsText[1].style.display = "block";
       return;
      }

  if(!isValidObj(pass, index++))
    {
      errorsText[2].style.display = "block";
       return;
    } 

    if(!isPasswordsSame(pass, repPass))
    {
      errorsText[3].style.display = "block";
     return;
    }

     let newUser = {
       login: login.value,
       mail: mail.value,
       pass: encryptPass(pass.value)
     }
     localStorage.setItem("newUserData", JSON.stringify(newUser))

     location.replace("userboard.html");
} 

document.getElementById("regBtn").addEventListener("click",createAccount)
document.getElementById("loginBtn").addEventListener("click",signIn)

function signIn()
 {
   const pass = document.getElementById("loginPassword");

   const login = document.getElementById("login")
  
   let allUsers = JSONToArray(JSON.parse(localStorage.getItem("Users")));
   allUsers = allUsers.filter((user)=>user.login==login.value & decryptPass(user.pass) === pass.value);

   if(allUsers[0] == undefined)
    return;

   setCookie("loginedUser",JSON.stringify(allUsers[0]),1)
  
   location.replace("main.html");
 }

 window.addEventListener("load",()=>{
  if(checkCookie())
      location.replace("main.html");
});

