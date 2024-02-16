const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
const regexLogin = /^[\w',][^!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{1,30})$/i;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\w{7,200}$/;
const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

export const isPasswordsSame  =  (pass1, pass2)=>
{
    let isSame;

    pass1.value === pass2.value? isSame = true: isSame = false;
    
    return isSame;

}

export const isValidObj = (obj,regexId)=>
{
    let isValid;
    let regex = setRegex(regexId); 
    obj.value.match(regex)? isValid = true :  isValid = false;

    return isValid;
}

function setRegex(regexId)
{
    switch(regexId)
    {
        case 1:   
            return regexLogin;
        case 2:
            return regexMail;
        case 3:   
            return regexPass; 
        case 4:   
            return regexName;
        case 5:
            return regexPhone;
    }

}
