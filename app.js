"use strict";

// Selections //

const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
const randomNumber2 = Math.trunc(Math.random() * 6 + 1);

// Dice Numbers //

const player1 = document.querySelector(".img1");
player1.setAttribute("src", `images/dice${randomNumber1}.png`);

const player2 = document.querySelector(".img2");
player2.setAttribute("src", `images/dice${randomNumber2}.png`);

// Conditions //

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 won the game";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 won the game";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

console.log(randomNumber1);
console.log(randomNumber2);
