var wavesSound = new Audio("./earThoughts/waves.mp3");

function waves() {
  wavesSound.loop = true;
  wavesSound.play();
}

function buy() {
  alert("Thank you for your purchase.")
}
