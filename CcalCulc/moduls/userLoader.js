import {getCookie, checkCookie, setCookie} from "./cookies.js"

function setAllData()
{
    
    const tabs = document.querySelectorAll('.for-user-data')


   let gCoockie= JSON.parse(getCookie("loginedUser"));
    tabs[0].textContent =gCoockie.name 
    tabs[1].textContent =gCoockie.birth 
    tabs[2].textContent =gCoockie.age 
    tabs[3].textContent =gCoockie.gender 
    tabs[4].textContent =gCoockie.weight 
    tabs[5].textContent =gCoockie.height 
     
}

const logOut = document.getElementById("toLogout");

window.addEventListener("load",()=>{
    if(!checkCookie())
        location.replace("index.html");
    else
        {
            document.getElementById("toLogin").style.display = "none";
            logOut.style.display = "block";       
        }
});



logOut.addEventListener("click", ()=>{{
   
    }})

window.addEventListener("load",setAllData)
