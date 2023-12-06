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
const nextButton = document.querySelector<HTMLButtonElement>("#next-button");
const instructions =
  document.querySelector<HTMLParagraphElement>("#instructions");
const restartButton =
  document.querySelector<HTMLButtonElement>("#restart-button");

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
  !nextButton ||
  !instructions ||
  !restartButton
) {
  throw new Error("Something is wrong with your HTML buttons");
}

//create the function to change the color of the buttons where one button matches the matcher button

let level = 0;

const game = () => {
  //change the background-color of the matcher to the

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
};

const validateAnswer = (buttonIndex: number) => {
  const isMatch = allBeginnerLevels[level].colorButtons[buttonIndex].matcher;
  if (isMatch) {
    alert("Correct! You matched the button!");
    // Add logic for what happens when the answer is correct
  } else {
    alert("Incorrect! Try again.");
    // Add logic for what happens when the answer is incorrect
  }
};

const restartGame = () => {
  level = 0;
  game();
};

const nextGame = () => {
  level++;
  if (level < allBeginnerLevels.length) {
    game();
  } else {
    alert("Congratulations! You completed all levels.");
  }
};

const levelCounter = () => {};

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

nextButton.addEventListener("click", nextGame);
restartButton.addEventListener("click", restartGame);

//if the user clicks the button that matches the matcher they get a message that the answer is correct
//when the user clicks any of the buttons that do not match the matcher the user gets a message that the answer is incorrect

//create the function that validates the user input to see if they picked the right color

//create the function that clicks next game
