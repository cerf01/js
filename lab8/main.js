function signUp()
{
    const mail = document.getElementById("email");

    const pass = document.getElementById("password");

    const repPass = document.getElementById("repeatPass");

    if(!isValidObj(mail, regexMail))
        return;
    if(!isValidObj(pass, regexPass))
        return;
    if(!isPasswordsSame(pass, repPass))
        return;

    alert("all");
    location.replace("regs.html");
}

function save()
{
    const fname = document.getElementById("fname");

    const lname = document.getElementById("lname");

    const birtdate = document.getElementById("birth");

    const phone = document.getElementById("phone");

    const gender = document.getElementById("gender");


    if(!isValidObj(fname, regexName))
        return;
    if(!isValidObj(lname, regexName))
        return;
    if(!isBirthValid(birtdate.value))
        return;
    if(!isPasswordsSame(phone, regexPhone))
        return;
    if(gender.value!=="")
        return;

    alert("all");
}

function setCookie(name, value, day)
{
    let expires = "";
    if(value.length <= 0)  
        return;   

    /*document.cookie = `${encodeURIComponent()}`*/

    const date = new Date();
    date.setTime(Date.getTime() + (day*24*60*60*1000));

    expires = "; expires=" +date.toUTCString ; 

    document.cookie = name + "-" + value + expires + "paht=/";
}

function getCookie(name)
{
    const NameC = name + '=';
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) 
    {
        let cook = cookies[i];

        while (cook.charAt(0) === ' ')
            cook = cook.substring(1);

        if (cook.indexOf(NameC) === 0) 
            return decodeURIComponent(cook.substring(NameC.length));

    }

    return null;
}


function AleCook() {
    let Res = getCookie('Test');
    alert(Res);
}

const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\w{7,200}$/;
const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

function isPasswordsSame(pass1, pass2)
{
    let isSame;

    pass1.value === pass2.value? isSame = true: isSame = false;
    
    return isSame;

}

function isBirthValid(year)
{
    let isValid;

    year>=1900? isValid = true :  isValid = false;

    return isValid;
}

function isValidObj(obj,regex)
{
    let isValid;

    obj.value.match(regex)? isValid = true :  isValid = false;

    return isValid;
}