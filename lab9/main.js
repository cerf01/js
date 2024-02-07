const paintBox = document.getElementById("paintBox");
const context = paintBox.getContext("2d");

paintBox.style.backgroundColor = "rgb(163, 163, 163)";

const drawningType = document.getElementById("figures");

const inputedWidth = document.getElementById("figWidth");
const inputedHeight = document.getElementById("figHeight");
const inputedColor = document.getElementById("color");
const inputedCap = document.getElementById("cap");

const heightInput = document.getElementById("heightInput");
const brushStuff = document.getElementById("brushStuff");
const designItems = document.getElementById("designItems")

const scale = window.devicePixelRatio;

function disp() {
  paintBox.width = window.innerWidth;  //Math.floor(canvas.offsetWidth*scale);
  paintBox.height = window.innerHeight;//Math.floor(canvas.offsetHeight*scale);    

}

let x = 0;
let y = 0;

let isDrawing = false;

window.onload = disp();
window.onresize = disp();

function autoinput()
{
  drawningType.value = "0";
  onChangeFigure();
}

function draw(value)
{
  switch(value)
  {
    case "1": 
          drawCircle(context, x,y,inputedWidth,inputedColor);
      break;
    case "2": 
            drawRect(context, x,y,inputedWidth,inputedHeight,inputedColor);
      break;
    case "3": 
         drawRhomb(context,x,y,inputedWidth,inputedHeight,inputedColor);
      break;
      case "4": 
        drawTriangle(context,x,y,inputedWidth,inputedHeight,inputedColor);
      break;
    case "5":
      {  
        drawLine(context, x, y, x, y,inputedWidth, inputedColor ,inputedCap); 
        isDrawing = true;
      }break;
  }
}

paintBox.addEventListener("mousedown", (e) => {
  if(drawningType.value === "0")
    return;
  x = e.offsetX;
  y = e.offsetY;

  draw(drawningType.value);
});

paintBox.addEventListener("mousemove", (e) => {
  if (!isDrawing) 
    return;

  drawLine(context, x, y, e.offsetX, e.offsetY, inputedWidth ,inputedCap); 

  x = e.offsetX;
  y = e.offsetY;
  
});

function endDrawing()
{
  if (!isDrawing) 
    return;

  x = 0;
  y = 0;
  isDrawing = false;
}

paintBox.addEventListener("mouseup", endDrawing);
paintBox.addEventListener("mouseleave",endDrawing);


function getBrushColor()
{
  return document.getElementById("drawing").checked? inputedColor.value: paintBox.style.backgroundColor;
}

function drawLine(cntx, X1, Y1, X2, Y2, width, cap) 
{
  cntx.beginPath();
  cntx.strokeStyle = getBrushColor();

  cntx.moveTo(X1, Y1);

  cntx.lineWidth = width.value;
  cntx.lineCap = cap.value;

  cntx.lineTo(X2, Y2);
  cntx.stroke();
  cntx.closePath();
}

function drawCircle(cntx, X,Y, diam, color)
{
  cntx.fillStyle = color.value;

  cntx.beginPath();
  cntx.arc(X,Y,diam.value,0, Math.PI*2, true);

  cntx.closePath();
  cntx.fill();
}

function drawRect(cntx, X,Y, width, height, color)
{
    cntx.fillStyle = color.value;

    cntx.beginPath();
    cntx.fillRect(X-(width.value/2), Y-(height.value/2), width.value, height.value);

    cntx.closePath();

    cntx.fill();
}

function drawTrianglesPart(cntx, X,Y,width, height, color)
{
  cntx.beginPath();

  cntx.moveTo(X, Y);
  cntx.lineTo(X, Y-parseInt(height));
  cntx.lineTo(X+parseInt(width), Y);

  cntx.closePath();

  cntx.fillStyle = color;
  cntx.fill();
}

function drawTriangle(cntx, X,Y, width, height, color)
{
  drawTrianglesPart(cntx, X,Y,width.value, height.value, color.value);
  drawTrianglesPart(cntx, X,Y,-width.value, height.value, color.value);
}

function drawRhomb(cntx, X,Y, width, height, color)
{
  drawTrianglesPart(cntx, X,Y,width.value, height.value, color.value);
  drawTrianglesPart(cntx, X,Y,-width.value, height.value, color.value);

  drawTrianglesPart(cntx, X,Y,width.value, -height.value, color.value);
  drawTrianglesPart(cntx, X,Y,-width.value, -height.value, color.value);

}

function clearAll()
{
  console.log(paintBox.width+" "+paintBox.height)
  context.fillStyle = "rgb(163, 163, 163)";

  context.beginPath();
  context.fillRect(1,1, paintBox.width, paintBox.height,);

  context.closePath();

  context.fill();
}

function onChangeFigure()
{ 
  heightInput.style.display ="none";
  brushStuff.style.display ="none";
  designItems.style.display ="none";
  switch(drawningType.value)
  {
      case"1":
          designItems.style.display = "block"
        break;
      case "2":
      case"3":
      case "4":
      {
        designItems.style.display = "block"
        heightInput.style.display ="block";
      } break;
      case "5":
      { 
        brushStuff.style.display ="block";
        designItems.style.display = "block" 
      }break;
  }
}

window.onload = autoinput();