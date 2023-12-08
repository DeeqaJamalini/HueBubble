import "./styles/main.css";
import { allBeginnerLevels } from "./colors/all-levels";

const buttons = Array.from(document.querySelectorAll('.button'));
const matcher = document.querySelector<HTMLButtonElement>("#matcher");
const gameButton = document.querySelector<HTMLButtonElement>("#game-button");
const instructions = document.querySelector<HTMLParagraphElement>("#instructions");
const scoreCounter = document.querySelector<HTMLParagraphElement>("#score-counter");

if (!matcher || !gameButton || !instructions || !scoreCounter || buttons.length !== 10) {
  throw new Error("Something is wrong with my HTML elements");
}

let level = 0;
let score = 0;
let isClickable = false;

const game = () => {
  const levelData = allBeginnerLevels[level];
  matcher.style.backgroundColor = levelData.matcherButton["matcher-button"];
  buttons.forEach((button, index) => {
    (button as HTMLButtonElement).style.backgroundColor = levelData.colorButtons[index].color;
  });
  isClickable = true;
  gameButton.textContent = "Restart";
};

const updateScore = () => {
  (scoreCounter as HTMLParagraphElement).textContent = `Score: ${score}/100`;

};

const validateAnswer = (buttonIndex: number) => {
  if (!isClickable) {
    return;
  }

  const isMatch = allBeginnerLevels[level].colorButtons[buttonIndex].matcher;

  if (isMatch) {
    alert("Correct! You matched the button!");
    score++;
    updateScore();
    level++;
    if (level < allBeginnerLevels.length) {
      game();
    } else {
      alert("Congratulations! You completed all levels.");
    }
  } else {
    alert("Incorrect! Try again.");
  }
};

const toggleGame = () => {
  if (level === 0) {
    startGame();
  } else {
    restartGame();
  }
};

const restartGame = () => {
  level = 0;
  score = 0;
  updateScore();
  game();
};

const startGame = () => {
  level = 0;
  score = 0;
  updateScore();
  isClickable = true;
  game();
  gameButton.textContent = "Restart";
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => validateAnswer(index));
});

gameButton.addEventListener("click", toggleGame);
