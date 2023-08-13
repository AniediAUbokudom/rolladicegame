function rollDice(playerNum) {
  //change the img for each die depending on player num
  let randNum1 = genRandm(); //generates for die1
  let randNum2 = genRandm(); //generates for die2
  const playersFolder = "dice-faces/";
  const player1List = [//hold player1 images
    "u1.jpg",
    "u2.jpg",
    "u3.jpg",
    "u4.jpg",
    "u5.jpg",
    "u6.jpg",
  ];
  const player2List = [
    "e1.png",
    "e2.png",
    "e3.png",
    "e4.png",
    "e5.png",
    "e6.png",
  ];
  let currentPlayer1Count = Number(//change string to num
    document.getElementById("player1Count").innerText  //get how many times player has played
  );
  let currentPlayer2Count = Number(
    document.getElementById("player2Count").innerText
  );

  let currentPlayer1Score =
    Number(document.getElementById("player1Score").innerText) +
    randNum1 +
    randNum2; //get existing score plus generated random nums to update existing score
  let currentPlayer2Score =
    Number(document.getElementById("player2Score").innerText) +
    randNum1 +
    randNum2;

  if (playerNum == 1 && currentPlayer1Count <= 9) { //manages who's playing and limits play count to 10
    document.getElementById("playerOneDice1").src = //updates the dice
      playersFolder + player1List[randNum1 - 1];
    document.getElementById("playerOneDice2").src =//updates the dice 
      playersFolder + player1List[randNum2 - 1];

    document.getElementById("player1Count").innerText = currentPlayer1Count + 1; //updates the count
    document.getElementById("player1Score").innerText = currentPlayer1Score; //updates the score
  } else if (currentPlayer2Count <= 9) {
    document.getElementById("playerTwoDice1").src =
      playersFolder + player2List[randNum1 - 1];
    document.getElementById("playerTwoDice2").src =
      playersFolder + player2List[randNum2 - 1];

    document.getElementById("player2Count").innerText = currentPlayer2Count + 1;
    document.getElementById("player2Score").innerText = currentPlayer2Score;
  } else {
    let player1FinalScore = Number(//get the final score from HTML(player1)
      document.getElementById("player1Score").innerText
    );
    let player2FinalScore = Number( //get the final score from HTML(player2)
      document.getElementById("player2Score").innerText
    );
    
    if (player1FinalScore > player2FinalScore) {//who won?
      document.getElementById("WinLose").innerText = "Player 1 Wins!";
    } else {
      document.getElementById("WinLose").innerText = "Player 2 Wins!";
    }
  }
}
function genRandm() {
  var randNum = Math.round(Math.random() * 5) + 1;
  return randNum;
}
