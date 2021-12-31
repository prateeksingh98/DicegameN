"use strict";

//here we selecting elements

const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const score1El = document.getElementById("score--0"); //scores set for elements for player 1 and 2
const score2El = document.getElementById("score--1");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions of mine game

let scores = [0, 0];
//array to store initial scores of players

score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// lets roll the dice(functionality)

btnRoll.addEventListener("click", function () {
  //random dice number 1 to 6
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    //display dice with number

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //checked for rolled 1 number
    if (dice !== 1) {
      //currentScore = currentScore + dice; same code also written as
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add current score to active player
    scores[activePlayer] = scores[activePlayer] + currentScore;

    //print score on screen
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check kro score 100 hai ya nhi
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;
  score1El.textContent = 0;
  score2El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  diceEl.classList.add("hidden");
  playerEl0.classList.remove("player--winner");
  playerEl1.classList.remove("player--winner");
  playerEl0.classList.add("player--active");
  playerEl1.classList.remove("player--active");
  score1El.textContent = 0;
  score2El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
});
