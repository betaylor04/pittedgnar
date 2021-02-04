var wavesSound = new Audio("./earThoughts/waves.mp3");
var solar = new Audio("./earThoughts/solar.mp3")

function waves() {
  wavesSound.loop = true;
  wavesSound.play();
}

function buy() {
  alert("Thank you for your purchase.")
}

function clickSoundFunc() {
  var clickSound = new Audio("./earThoughts/click.mp3");
  clickSound.play();

  var menu = document.getElementById("menu");
  if (window.getComputedStyle(menu).visibility === "hidden") {
    menu.style.visibility = "visible"
  }
  else {
    menu.style.visibility = "hidden"
  }
}

function showTeam() {
  document.getElementById("team-menu").style.visibility = "visible";
}

function hideTeam() {
  var clickSound = new Audio("./earThoughts/click.mp3");
  clickSound.play();

  var menu = document.getElementById("menu");
  if (window.getComputedStyle(menu).visibility === "visible") {
    menu.style.visibility = "hidden"
  }
  document.getElementById("team-menu").style.visibility = "hidden";
}

function solarRoofs() {
  solar.play();
}
