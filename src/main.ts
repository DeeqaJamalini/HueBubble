import "./styles/main.css";
import { allBeginnerLevels } from "./colors/all-levels";

//get all the buttons html

const matcher = document.querySelector<HTMLButtonElement>("#matcher");
const button1 = document.querySelector<HTMLButtonElement>("#button1");
const button2 = document.querySelector<HTMLButtonElement>("#button2");
const button3 = document.querySelector<HTMLButtonElement>("#button3");
const button4 = document.querySelector<HTMLButtonElement>("#button4");
const button5 = document.querySelector<HTMLButtonElement>("#button5");
const button6 = document.querySelector<HTMLButtonElement>("#button6");
const button7 = document.querySelector<HTMLButtonElement>("#button7");
const button8 = document.querySelector<HTMLButtonElement>("#button8");
const button9 = document.querySelector<HTMLButtonElement>("#button9");
const button10 = document.querySelector<HTMLButtonElement>("#button10");
const startButton = document.querySelector<HTMLButtonElement>("#start-button");
const instructions =
  document.querySelector<HTMLParagraphElement>("#instructions");
const restartButton =
  document.querySelector<HTMLButtonElement>("#restart-button");
const scoreCounter =
  document.querySelector<HTMLParagraphElement>("#score-counter");

if (
  !matcher ||
  !button1 ||
  !button2 ||
  !button3 ||
  !button4 ||
  !button5 ||
  !button6 ||
  !button7 ||
  !button8 ||
  !button9 ||
  !button10 ||
  !startButton ||
  !instructions ||
  !restartButton
) {
  throw new Error("Something is wrong with my HTML buttons");
}

let level = 0;
let score = 0;

let isClickable = true;

const game = () => {
  matcher.style.backgroundColor =
    allBeginnerLevels[level].matcherButton["matcher-button"];
  button1.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[0].color;
  button2.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[1].color;
  button3.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[2].color;
  button4.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[3].color;
  button5.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[4].color;
  button6.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[5].color;
  button7.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[6].color;
  button8.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[7].color;
  button9.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[8].color;
  button10.style.backgroundColor =
    allBeginnerLevels[level].colorButtons[9].color;
  isClickable = true;
};

const updateScore = () => {
  if (scoreCounter) {
    scoreCounter.textContent = `Score: ${score}`;
  }
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
};

button1.addEventListener("click", () => validateAnswer(0));
button2.addEventListener("click", () => validateAnswer(1));
button3.addEventListener("click", () => validateAnswer(2));
button4.addEventListener("click", () => validateAnswer(3));
button5.addEventListener("click", () => validateAnswer(4));
button6.addEventListener("click", () => validateAnswer(5));
button7.addEventListener("click", () => validateAnswer(6));
button8.addEventListener("click", () => validateAnswer(7));
button9.addEventListener("click", () => validateAnswer(8));
button10.addEventListener("click", () => validateAnswer(9));

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
