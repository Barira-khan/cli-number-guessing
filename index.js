#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) computer will generate a number - Done. 
// 2) user's input for guessing number  - Done.
// 3) compare the number given by user and the computer generated number and then show results - Done.
var randomNumber = Math.floor(Math.random() * 20 + 1);
var answers = await inquirer_1.default.prompt([
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
