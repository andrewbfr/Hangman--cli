// game logic only
// this will receive user input through the inquirer.prompt
// letter will be stored in a letter array
//The completed game should be able to receive user input using the inquirer or prompt npm packages.
// each new letter guess should be pushed into an array that stores the letter in the position that directly corresponds to the randomly selected word, .sliced into an array itself

var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

var wordBank = ["circle", "square", "math", "toast", "password", "pen", "pin", "pan", "pun", "gym", "roast", "most", "corner", "vertices", "fry", "slalom", "crust", "linear", "marshmellow", "reserved", "banana", "fork", "hang"];
var letterDump = [];

function hangman(){
    var wordFill = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log(wordFill);
    var wordSplit = wordFill.slice();
    console.log(wordSplit);
    console.log(wordSplit.length);
    var underScore = [];
    for (var i = 0; i < wordSplit.length; i++){
        underScore.push("_");
    }
    console.log(underScore);
    inquirer.prompt([
        {
        type: "input",
        name: "userInput", 
        message: "Guess a letter!" 
        }
    ]).then(answers => { 
        var theLetter = answers.userInput;
        console.log(theLetter);

        // for (var i = 0; i < wordSplit.length; i++) {
        //     if (theLetter === wordSplit[i]) {
        //         letterDump.push(wordSplit[i])
        //         console.log(letterDump);
        //     }
        //     else (){

        //     }
        // }

    });
}

hangman();
// some inquirer prompt to leave the game, give up when number of guesses is used up or restart (like return to a function that includes the primary random word generation and inquirer guessing).
