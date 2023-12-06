import "./styles/main.css"
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
const instructions = document.querySelector<HTMLParagraphElement>("#instructions");

if (!matcher || !button1 || !button2 || !button3 || !button4 || !button5 || !button6 || !button7 || !button8 || !button9 || !button10 || !nextButton || !instructions) {
    throw new Error("Something is wrong with your HTML buttons");

}


//create the function to change the color of the buttons where one button matches the matcher button


const level = 0


const game = () => {



    //change the background-color of the matcher to the 
    

    matcher.style.backgroundColor = allBeginnerLevels[level].matcherButton["matcher-button"]
    button1.style.backgroundColor = allBeginnerLevels[level].colorButtons[0].color
    button2.style.backgroundColor = allBeginnerLevels[level].colorButtons[1].color
    button3.style.backgroundColor = allBeginnerLevels[level].colorButtons[2].color
    button4.style.backgroundColor = allBeginnerLevels[level].colorButtons[3].color
    button5.style.backgroundColor = allBeginnerLevels[level].colorButtons[4].color
    button6.style.backgroundColor = allBeginnerLevels[level].colorButtons[5].color
    button7.style.backgroundColor = allBeginnerLevels[level].colorButtons[6].color
    button8.style.backgroundColor = allBeginnerLevels[level].colorButtons[7].color
    button9.style.backgroundColor = allBeginnerLevels[level].colorButtons[8].color
    button10.style.backgroundColor = allBeginnerLevels[level].colorButtons[9].color



  
    





 }


 const restartGame = () => {

    changeLevel()


 }



 const nextGame = () => {


 }


 const levelCounter = () => {   


 }


 nextButton.addEventListener("click", game)


//if the user clicks the button that matches the matcher they get a message that the answer is correct
//when the user clicks any of the buttons that do not match the matcher the user gets a message that the answer is incorrect

//create the function that validates the user input to see if they picked the right color

//create the function that clicks next game

