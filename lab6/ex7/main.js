const boxs = document.querySelectorAll(".box");


function updateDisplay(event, index) {

  boxs[index].style.backgroundColor = "rgb(172, 172, 172)";

}

function updateDisplay2(event, index) {

  boxs[index].style.backgroundColor = "rgb(122, 122, 122)";

}


function as()
{
    boxs.forEach((item, index)=>{
        item.addEventListener("mouseenter", (e)=>{ updateDisplay(e, index)}, false);
        item.addEventListener("mouseleave", (e)=>{ updateDisplay2(e, index)}, false);   
    })
}
as();