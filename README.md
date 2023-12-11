# HueBubble

Welcome to the Color Matcher Game! This interactive web game challenges players to match colors in different levels of difficulty. The game is responsive and designed for play on various devices, including mobile, tablet, and laptop.

## Technologies Used

- **Languages:** TypeScript, HTML, SCSS
- **Dependencies:** canvas-confetti

## Getting Started

1. Clone this repository.
2. Open the `index.html` file in a web browser to start the game.

## How to Play

1. Select a difficulty level: Beginner, Intermediate, or Expert.
2. Click the "Start" button to begin the game.
3. Match the color of the matcher bubble to the color of the bubbles below it.


### Main Game Logic (main.ts)

- The main game logic is located in the `main.ts` file.
- Different difficulty levels are stored in separate TypeScript files (`beginner-levels.ts`, `intermediate-levels.ts`, `expert-levels.ts`).
- SCSS is used for styling the game.

### Color Definitions (beginner-levels.ts, intermediate-levels.ts, expert-levels.ts)

- Color definitions for each level are stored in separate files.
- Each level includes a matcher button color and an array of color buttons with matching indicators.

## Levels

- **Beginner Levels:** 1 to 20
- **Intermediate Levels:** 1 to 20
- **Expert Levels:** 1 to 20

## Acknowledgments

- This project uses the `canvas-confetti` library for confetti animations.
- The sound effects used are from mixit.co


---

