const txt = document.getElementById("textLine");
const field = document.getElementById("footballField");
const ball = document.getElementById("soccerball");

let text = "";

let isClicked = false;

function sd()
{
    let last =txt.value.length-1;
    if(parseInt(txt.value[last])>=0&&parseInt(txt.value[last])<=9)
        txt.value[last] = ""
    else text =  txt.value;
    txt.value = text
}
txt.addEventListener('keyup', sd())

const modal = document.getElementById("modalWin");

const btn = document.getElementById("open");

const clsBut = document.getElementById("close");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

field.addEventListener('click', moveElement)

function moveElement(event) {
  
  const initialX = ball.offsetLeft;
  const initialY = ball.offsetTop;

  const endPoingX = event.pageX;
  const endPoingY = event.pageY;

  movedivX(endPoingX-parseInt(ball.offsetWidth)/2, initialX>endPoingX?-1:1);
  movedivY(endPoingY-parseInt(ball.offsetHeight)/2,initialY>endPoingY?-1:1);
}

function movedivX(X, speed)
{
  if(ball.offsetLeft == X)
    return;
    ball.style.left = ball.offsetLeft+speed + "px";
    requestAnimationFrame(function(){movedivX(X,speed)});
}

function movedivY(Y,speed)
{
  if(ball.offsetTop == Y)
    return;
    ball.style.top = ball.offsetTop+speed+ "px";
    requestAnimationFrame(function(){movedivY(Y,speed)});
}
let switchLigth = 0;
function lightOn()
{
  const lamps = document.querySelectorAll(".light") 
  lamps.forEach((item)=>{item.style.backgroundColor = "gray"})
  if(switchLigth >2)
    switchLigth =0;
  switch(lamps[switchLigth].id)
  {
    case "red":lamps[switchLigth].style.backgroundColor ="red";
    break;
    case "yellow":lamps[switchLigth].style.backgroundColor ="yellow";
    break;
    case "green":lamps[switchLigth].style.backgroundColor ="green";
    break;
  }
    switchLigth++;

}

const books = document.querySelectorAll(".book-string");

let temp = "";
function onPick(n)
{
   if(temp!=="") 
        document.getElementById("curr-tab").id = temp;

    temp = books[n].id;
    books[n].id = "curr-tab";
    
}

const tip = document.getElementById("tooltip");
const tipText = document.getElementById("tooltiptext");

tip.addEventListener('mouseover', function(){
    tipText.style.visibility="visible";
});

tip.addEventListener('mouseleave', function(){
  tipText.style.visibility="hidden";
});
