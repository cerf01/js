import {checkCookie, getCookie }from './cookies.js';

const weightBMI =  document.getElementById("BMIWeight");
const  heightBMI = document.getElementById("BMIHeight");
const  weightPD = document.getElementById("PDWeight")
const  heightPD = document.getElementById("PDHeight")
const  age = document.getElementById("age");
const gender =  document.getElementById("gender");
const answerFields = document.querySelectorAll(".answer");
const activity = document.getElementById("activity");
const calor = document.getElementById("calorCount");
const vage = document.getElementById("foodVage");
const resBtns = document.querySelectorAll(".resultBtn");

const logOut = document.getElementById("toLogout");
const logIn =  document.getElementById("toLogin")
window.addEventListener("load",()=>{
    if(checkCookie())
       {    autoFF();
            logIn.style.display = "none";
            logOut.style.display = "block";       
        }
    else
    {
        logIn.addEventListener("click", function() {location.replace("index.html")})
        weightBMI.value =  null;
        heightBMI.value = null;
        weightPD.value =  null;
        heightPD.value = null;
        age.value = null;
        gender.value = " ";
    }
    activity.value = " ";   
    calor.value =null;
    vage.value = null;
});




function autoFF()
{
    let userCoockie= JSON.parse(getCookie("loginedUser"));
    weightBMI.value = userCoockie.weight;
    heightBMI.value = userCoockie.height/100;
    weightPD.value = userCoockie.weight;
    heightPD.value =userCoockie.height;
    age.value = userCoockie.age;
    gender.value = userCoockie.gender;

    weightBMI.readOnly = true;
    heightBMI.readOnly = true;
    weightPD.readOnly = true;
    heightPD.readOnly = true ;
    age.readOnly = true;
    gender.readOnly = true ;
}

function calculBMI()
{
    if(weightBMI.value == null)
        return;
    if(heightBMI.value == null)
        return;
        answerFields[0].textContent = "Your BMI is "+(weightBMI.value/Math.pow(heightBMI.value,2)).toFixed(3);
    
}

function calculCPD()
{

    if(weightPD.value == null) 
        return;
    
    if(heightPD.value == null)
        return;

    if( age.value == null)
        return;

    if(gender.value == " ") 
        return;

    if(gender.activity == " ") 
        return;
    
    let mult =0;
    switch(activity.value)
    {
        case "M/A": { mult = 1.2; } break;
        case "L": { mult = 1.375; } break;
        case "M": { mult = 1.55; } break;
        case "H": { mult = 1.7; } break;
        case "E": { mult = 1.9; } break;
    }    

    answerFields[1].textContent = ((10 * weightPD.value + 6.25 * heightPD.value - 5 * age.value + (gender.value =="Male"? 5: -161)) * mult).toFixed(3)+" calories per day"
}

function calculEC()
{
  

    if(calor.value == null) 
    return;

    if(vage.value == null)
        return;
    answerFields[2].textContent = parseFloat(calor.value*vage.value).toFixed(3);
}

resBtns[0].addEventListener("click",calculBMI);
resBtns[1].addEventListener("click",calculCPD);
resBtns[2].addEventListener("click",calculEC);