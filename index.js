var randomNumber1 = Math.floor(Math.random()*6+1);

var randomimage = "dice" + randomNumber1 + ".png";

var randomeImgSrc = "images/" + randomimage;

document.querySelectorAll("img")[0].setAttribute("src", randomeImgSrc);


var randomNumber2 = Math.floor(Math.random()*6+1);
var randomimage2 = "dice" + randomNumber2 + ".png";

var randomeImgSrc2 = "images/" + randomimage2;


document.querySelectorAll("img")[1].setAttribute("src", randomeImgSrc2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
} else if  (randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Try again";

}
