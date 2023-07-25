"use strict";

const btn = document.querySelector(".buttons");
const result = document.querySelector(".result");
const userScore = document.querySelector(".user-result");
const computerScore = document.querySelector(".computer-result");

const spinArr = ["rock", "paper", "scissors"];
let userCurScore = 0;
let computerCurScore = 0;

const computerSpin = function () {
  const num = Math.trunc(Math.random() * 3);
  return spinArr[num];
};

const renderMarkup = function (res, user = "", computer = "") {
  result.innerHTML = "";
  const markup = `${res} ${user} ${user == "" ? user : "beats"} ${computer}`;
  result.append(markup);
};
const updateScore = function () {
  userScore.textContent = userCurScore;
  computerScore.textContent = computerCurScore;
};

const checkWiner = function (user, computer) {
  if (user === computer) {
    renderMarkup("it's a tie! ");
  }
  if (
    (user === "rock" && computer === "paper") ||
    (user === "scissors" && computer === "rock") ||
    (user === "paper" && computer === "scissors")
  ) {
    renderMarkup("You lose!", computer, user);
    computerCurScore++;
    updateScore();
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    renderMarkup("You win!", user, computer);
    userCurScore++;
    updateScore();
  }
};

btn.addEventListener("click", function (e) {
  const target = e.target.closest(".btn");
  if (!target) return;
  const userSpin = target.dataset.spin;
  const comSpin = computerSpin();
  checkWiner(userSpin, comSpin);
});
