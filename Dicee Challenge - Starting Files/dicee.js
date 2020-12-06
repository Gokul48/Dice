var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomSrc = "images/" + randomDiceImage;

var attribute1 = document.querySelectorAll("img")[0];
attribute1.setAttribute("src", randomSrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomSrc2 = "images/" + randomDiceImage2;

var attribute2 = document.querySelectorAll("img")[1];
attribute2.setAttribute("src", randomSrc2);

if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
} else {
  document.querySelector("h1").innerHTML =  "🏁 Draw 🏁";
}
