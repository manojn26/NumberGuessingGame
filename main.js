window.onload = makeNone;

const previos = document.getElementById("previos-guess");
const wrong = document.getElementById("wrong");
const correct = document.getElementById("correct");
const tell = document.getElementById("tell");
const button = document.getElementById("btn");
const input = document.getElementById("guess");
const random = Math.round(Math.random() * 100);
const over = document.getElementById("game-over");
const reset = document.getElementById("reset");
let guessCount = 0;

function makeNone() {
  previos.style.display = "none";
  wrong.style.display = "none";
  correct.style.display = "none";
  tell.style.display = "none";
  over.style.display = "none";
  input.disabled = false;
  guessCount = 0;

  return;
}

function gameOver() {
  previos.style.display = "none";
  wrong.style.display = "none";
  correct.style.display = "none";
  tell.style.display = "none";
  input.disabled = true;
  previos.innerText = "Previous :";

  return;
}

button.addEventListener("click", submitButton);

function submitButton() {
  guessCount += 1;
  if (input.value == "") {
    alert("Fill pandra Mayiru");
    return;
  }
  if (Number(input.value) == random) {
    correct.style.display = "block";
    previos.style.display = "inline";
    wrong.style.display = "none";
    tell.style.display = "none";
    previos.innerText += " " + `${Number(input.value)}`;
  } else {
    wrong.style.display = "block";
    previos.style.display = "inline";
    previos.innerText += " " + `${Number(input.value)}`;
    if (Number(input.value) > random) {
      tell.style.display = "inline";
      tell.innerText = `Your Guess is : High`;
    } else {
      tell.style.display = "inline";
      tell.innerText = `Your Guess is : Low`;
    }
  }
  if (guessCount === 10) {
    input.disabled = true;
    gameOver();
    over.style.display = "inline-flex";
    over.innerText = "Game Over";
  }
  input.value = "";
  input.focus();
}

reset.addEventListener("click", makeNone);
