#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a number - Done. 
// 2) user's input for guessing number  - Done.
// 3) compare the number given by user and the computer generated number and then show results - Done.
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answers = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "guess a number between 1-20: ",
    },
]);
if (answers.guessedNumber === randomNumber) {
    console.log("CONGRATULATIONS!!! you guessed the right number");
}
else {
    console.log("Oops!!! wrong number , try again");
}
