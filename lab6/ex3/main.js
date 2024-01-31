let isHiden = true;

function ShowHide()
{   
     const text = document.getElementById("someText"); 

    isHiden? text.style.display = "none":text.style.display = "block";
    isHiden = !isHiden;
}   

