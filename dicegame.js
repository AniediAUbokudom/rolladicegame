function rolldice () {
  var randNum1=Math.round(Math.random() * 5) + 1;
  var randNum2=Math.round(Math.random() * 5) + 1;
  var randNum3=Math.round(Math.random() * 5) + 1;
  var randNum4=Math.round(Math.random() * 5) + 1;

  document.getElementById("playerOneDice1").src="dice-faces/u" + randNum1 + ".jpg";
  document.getElementById("playerOneDice2").src="dice-faces/u" + randNum2 + ".jpg";
  document.getElementById("playerTwoDice1").src="dice-faces/e" + randNum3 + ".png";
  document.getElementById("playerOneDice2").src="dice-faces/e" + randNum4 + ".png";
}

