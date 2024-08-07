let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numOfGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number More Than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number less Than 100");
  } else {
    preGuess.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numOfGuess++;
  remainGuess.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  submit.setAttribute("disabled", "");
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.getElementById("newGame");
  newGame.addEventListener("click", () => {
    userInput.removeAttribute("disabled");
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numOfGuess = 1;
    guessSlot.innerHTML = "";
    remainGuess.innerHTML = `${11 - numOfGuess}`;
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
