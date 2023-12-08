import "./styles/main.scss";
import { allBeginnerLevels } from "./colors/all-levels";
import confetti, { Options } from "canvas-confetti";
 



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
let levelData = allBeginnerLevels[level];

const game = () => {
  levelData = allBeginnerLevels[level];
  instructions.textContent = "Click the bubble that matches the color above";
  matcher.style.backgroundColor = levelData.matcherButton["matcher-button"];
  buttons.forEach((button, index) => {
    (button as HTMLButtonElement).style.backgroundColor = levelData.colorButtons[index].color;
  });
  isClickable = true;
  
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
    instructions.textContent ="Correct! You matched the button!";
    
    const matcherColor = levelData.matcherButton["matcher-button"];
    const confettiOptions: Options = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [matcherColor], // Set the color to the matcher button color
    };
    confetti(confettiOptions);
    
    score++;
    updateScore();
    level++;
    if (level < allBeginnerLevels.length) {
      setTimeout(() => {
        gameButton.textContent = "Restart";
        game();
      }, 2000); 
    } else {
      instructions.textContent ="Congratulations! You completed all levels.";
    }
  } else {
    instructions.textContent ="Incorrect! Try again.";

    

    matcher.classList.add('shake');

    setTimeout(() => {
      matcher.classList.remove('shake');
      isClickable = true;
    }, 500); //

    // Remove the 'shake' class after the animation ends
    
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
  gameButton.textContent = "Start";
  game();
  
};

const startGame = () => {
  level = 0;
  score = 0;
  updateScore();
  isClickable = true;
  game();
  
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => validateAnswer(index));
});

gameButton.addEventListener("click", toggleGame);


