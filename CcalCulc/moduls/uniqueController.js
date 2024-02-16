import {JSONToArray} from"./jsonToArr.js"

export const isUniqueLogin = (userLogin)=>
{
    let isUnique = true;
    let allUsers = [];

   allUsers = JSONToArray(JSON.parse(localStorage.getItem("Users")));

   allUsers.find((user) => user.login==userLogin) !=undefined?isUnique=false: isUnique = true;

   return isUnique;
}

export const isUniqueEmail = (userEmail)=>
{
    let isUnique;
    let allUsers = [];
    allUsers = JSONToArray(JSON.parse(localStorage.getItem("Users")));

    allUsers.find((user) => user.mail==userEmail) !=undefined?isUnique=false: isUnique = true;
 
    return isUnique;
}