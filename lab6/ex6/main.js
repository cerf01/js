
let sum = 0;
const Maxwidth = 400;
function AddWidth(elem)
{   const progressbar = document.getElementById(elem);
    console.log(`${sum}px`)
    sum+=(Maxwidth *5)/100;
    progressbar.style.width =`${sum}px`;
    console.log(`width: ${progressbar.style.width}`);
}   
