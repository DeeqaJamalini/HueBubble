import "./styles/main.scss";
import {
  allBeginnerLevels,
  allIntermediateLevels,
  allExpertLevels,
} from "./colors/all-levels";
import confetti, { Options } from "canvas-confetti";
import fairySound from "../sounds/mixkit-ethereal-fairy-win-sound-2019.wav";
import clickingSoundAudio from "../sounds/mixkit-hard-pop-click-2364.wav";
import completedLevelSoundAudio from "../sounds/mixkit-casting-long-fairy-magic-spell-875.wav";

let level = 0;
let score = 0;
let isClickable = false;
let isIntermediateLevel = false;
let isExpertLevel = false;
let isLevelSelected = false;
let levelData = allBeginnerLevels[level];


let timeoutId: number;
const buttons = Array.from(document.querySelectorAll(".button"));
const matcher = document.querySelector<HTMLButtonElement>("#matcher");
const gameButton = document.querySelector<HTMLButtonElement>("#game-button");
const beginnerButton =
  document.querySelector<HTMLButtonElement>("#beginner-button");
const intermediateButton = document.querySelector<HTMLButtonElement>(
  "#intermediate-button"
);
const expertButton =
  document.querySelector<HTMLButtonElement>("#expert-button");
const instructions =
  document.querySelector<HTMLParagraphElement>("#instructions");
const scoreCounter =
  document.querySelector<HTMLParagraphElement>("#score-counter");
const currentLevelDisplay =
  document.querySelector<HTMLParagraphElement>("#current-level");
const correctSound = new Audio(
 fairySound
);
const completedLevelSound = new Audio(
  completedLevelSoundAudio
);
const clickSound = new Audio(clickingSoundAudio);
const clickSoundSpeed = 3;
clickSound.playbackRate = clickSoundSpeed;
let levelType = "";
const originalButtonColors = buttons.map((button) => {
  return (button as HTMLButtonElement).style.backgroundColor;
});

if (
  !matcher ||
  !gameButton ||
  !beginnerButton ||
  !intermediateButton ||
  !expertButton ||
  !instructions ||
  !scoreCounter ||
  !currentLevelDisplay ||
  buttons.length !== 13
) {
  throw new Error("Something is wrong with my HTML elements");
}

const clearColorButtons = () => {
  buttons.forEach((button, index) => {
    (button as HTMLButtonElement).style.backgroundColor =
      originalButtonColors[index];
  });
};


const clearMatcherButton = () => {
  (matcher as HTMLButtonElement).style.backgroundColor = "#FFFFFF";
};
const game = () => {
  if (isExpertLevel) {
    levelData = allExpertLevels[level];
    levelType = "Expert";
  } else if (isIntermediateLevel) {
    levelData = allIntermediateLevels[level];
    levelType = "Intermediate";
  } else {
    levelData = allBeginnerLevels[level];
    levelType = "Beginner";
  }
  instructions.textContent = "Click the bubble that matches the color above";
  matcher.style.backgroundColor = levelData.matcherButton["matcher-button"];

  buttons.forEach((button, index) => {
    (button as HTMLButtonElement).style.backgroundColor =
      levelData.colorButtons[index].color;
  });
  isClickable = true;

  currentLevelDisplay.textContent = `Playing ${levelType} level`;
};

const updateScore = () => {
  (scoreCounter as HTMLParagraphElement).textContent = `Score: ${score}/20`;
};

const validateAnswer = (buttonIndex: number) => {
  if (!isClickable) {
    return;
  }

  const isMatch = levelData.colorButtons[buttonIndex].matcher;

  if (isMatch) {
    instructions.textContent = "Correct! You matched the bubble!";

    correctSound.play();
    const matcherColor = levelData.matcherButton["matcher-button"];
    const confettiOptions: Options = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [matcherColor],
    };
    confetti(confettiOptions);

    score++;
    updateScore();
    level++;
    isClickable = false;
    if (level < allBeginnerLevels.length) {
      timeoutId = setTimeout(() => {
        gameButton.textContent = "Restart";
        game();
      }, 2500);
    } else {
      completedLevelSound.play();
      instructions.textContent = "Congratulations! You completed all levels.";
    }
  } else {
    instructions.textContent = "Incorrect! Try again.";
    clickSound.play();

    matcher.classList.add("shake");

    setTimeout(() => {
      matcher.classList.remove("shake");
      isClickable = true;
    }, 500);
  }
};

const toggleGame = () => {
  if (!isIntermediateLevel && !isExpertLevel && !isLevelSelected) {
    instructions.textContent = "Please select a level first.";
  } else {
    if (level === 0) {
      startGame();
    } else {
      restartGame();
    }
  }
};

const restartGame = () => {
  level = 0;
  score = 0;
  isClickable = false;
  updateScore();
  gameButton.textContent = "Start";
  game();
};

const startGame = () => {
  updateScore();
  isClickable = true;
  game();
};

beginnerButton.addEventListener("click", () => {
  isClickable = false;
  clearTimeout(timeoutId);
  isIntermediateLevel = false;
  isExpertLevel = false;
  isLevelSelected = true;
  instructions.textContent =
    "You selected the Beginner level. Click 'Start' to begin.";
  currentLevelDisplay.textContent = ``;
  score = 0;
  updateScore();
  clearColorButtons();
  clearMatcherButton();
  gameButton.textContent = "Start";
  
});

intermediateButton.addEventListener("click", () => {
  isClickable = false;
  clearTimeout(timeoutId);

  isIntermediateLevel = true;
  isExpertLevel = false;
  isLevelSelected = true;
  instructions.textContent =
    "You selected the Intermediate level. Click 'Start' to begin.";
  currentLevelDisplay.textContent = ``;
  score = 0;
  updateScore();
  clearColorButtons();
  clearMatcherButton();

  gameButton.textContent = "Start";
  
});

expertButton.addEventListener("click", () => {
  isClickable = false;
  clearTimeout(timeoutId);
  isIntermediateLevel = false;
  isExpertLevel = true;
  isLevelSelected = true;
  instructions.textContent =
    "You selected the Expert level. Click 'Start' to begin.";
  currentLevelDisplay.textContent = ``;
  score = 0;
  updateScore();
  clearColorButtons();
  clearMatcherButton();
  gameButton.textContent = "Start";
});

buttons.forEach((button, index) => {
  button.addEventListener("click", () => validateAnswer(index));
});

gameButton.addEventListener("click", toggleGame);
