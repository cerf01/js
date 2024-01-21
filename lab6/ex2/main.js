const page = document.querySelector("html");

function updateDisplay(event) {
  const X = document.getElementById("x");
  const Y = document.getElementById("y");

    X.innerText = event.pageX;
    Y.innerText = event.pageY;
  }

  page.addEventListener("mousemove", updateDisplay);
