var a1 =  document.getElementById("A1");
var a2 =  document.getElementById("A2");
var a3 =  document.getElementById("A3");
var a3two = document.getElementById("A3two");
var a4 =  document.getElementById("A4");


function revealTextA1() {
      if (a1.getAttribute("src") == "img/A1.png")
        {
          a1.src = "img/a1text.png"
        }
      else
      {
        a1.src = "img/A1.png";
      }
    }

function revealTextA2() {
  if (a2.getAttribute("src") == "img/A2.png")
    {
      a2.src = "img/a2text.png"
    }
  else
  {
    a2.src = "img/A2.png";
  }
  }

function revealTextA3() {
  if (a3.getAttribute("src") == "img/A3.png")
    {
      a3.src = "img/a3text.png"
    }
  else
  {
    a3.src = "img/A3.png";
  }
}

function revealTextA3two() {
  if (a3two.getAttribute("src") == "img/A3two.png")
    {
      a3two.src = "img/a3twotext.png"
    }
  else
  {
    a3two.src = "img/A3two.png";
  }
}

function revealTextA4() {
    if (a4.getAttribute("src") == "img/A4.png")
      {
        a4.src = "img/a4text.png"
      }
    else
    {
      a4.src = "img/A4.png";
    }
  }
