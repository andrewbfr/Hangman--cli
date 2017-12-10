// game logic only
// this will receive user input through the inquirer.prompt
// letter will be stored in a letter array
//The completed game should be able to receive user input using the inquirer or prompt npm packages.
// each new letter guess should be pushed into an array that stores the letter in the position that directly corresponds to the randomly selected word, .sliced into an array itself

var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

var wordBank = ["circle", "square", "math", "toast", "password", "pen", "pin", "pan", "pun", "gym", "roast", "most", "corner", "vertices", "fry", "slalom", "crust", "linear", "marshmellow", "reserved", "banana", "fork", "hang"];
var correctLetterDump = [];
var wrongGuesses = [];


function hangman(){
    //these insure that the blanks are cleared for each session of gameplay and the word is generated anew
    var correctLetterDump = [];
        wrongGuesses = [];
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log(randomWord);
    //this cuts the word each session
         wordSplit = randomWord.split("");
    //separate randomWord into individual string values in one array
    console.log(wordSplit);
    //confirm number of positions in new array is equal to letters in randomWord
    console.log(wordSplit.length);
    
    //I wonder if all this "this" I'm using in pseudocode would work better in a constructor
    //reset value of underscores to stuff
         underScore = [];
         
    //this makes the underscores match the random word
    for (var i = 0; i < wordSplit.length; i++){
        underScore.push("_");
    }

    // This is important!! leave this one for final production: it shows the first blanks like Wheel of Fortune.
    console.log(underScore);

    //Providing generous guessing opportunities

    guessesLeft = wordSplit.length *2;
    console.log("You have " + guessesLeft + " guesses left.");
    

        // store the game functionality in a variable, so you can call it, and this way the variables you created above are available in this function
    var guessingBegin = function () {
        
        inquirer.prompt([
            // get user input
            {
            type: "input",
            name: "userInput", 
            message: "Guess a letter!" ,
            validate: function(value) {
                if (isNaN(value)) {
                return true;
                }
                return false;
            }
            }
            // that "value" is a bit magical, it must be the absolutevalue of what I'm later calling from the answers object as "theLetter". Interesting that scope prevents "value" from being passed through the inquirer object into the "then()" method
        ]).then(answers => { 
            var theLetter = answers.userInput;
            console.log(theLetter);
            // develop logic for placing correct guesses into array

            //set this to false to it may be toggled in event of a correct guess
        var isLetter = false;
        for (var j = 0; j < wordSplit.length; j++) {
            if (theLetter === wordSplit[j]) {
                isLetter = true;
            }
        }
    // have stored if the presence or absence of userguess in the randomWord as a boolean
    // need to fill in the blanks with the chosen letters, somehow
    if (isLetter) {
        for (var k = 0; k < wordSplit.length; k++) {
            if (randomWord[k] === theLetter){
                console.log("Correct");
                //this will show theLetter at the position(s) in the array where it matches
                underScore[k] = theLetter;    

            }

        }
                //outside the for loop, inside first "if"
        console.log(underScore);


    } else {
        //store the incorrect guess in the wrongGuesses
        // could also place a conditional to throw out duplicate incorrect guesses (and correct guesses)
        wrongGuesses.push(theLetter);

        guessesLeft--;
        console.log("Letter not present in chosen word. You have " + guessesLeft + " guesses left to gkeep trying!");
        if (guessesLeft = 0) {
            console.log("Out of guesses, try another round")
            hangman();
        }
    }
            


            // need to push incorrect guesses into "wrong guesses" and call new game once wrongguesses = wordSplit.length * 2
            // need to develop logic for restarting game when guessesLeft is = 0, decrementing as you go.


           


                

        });
     
    }
//closing guessingBegin() and calling the game logic
guessingBegin();
//closing hangman()
}


// this is for the development phase
hangman();

// some inquirer prompt to leave the game, give up when number of guesses is used up or restart (like return to a function that includes the primary random word generation and inquirer guessing).



// ok more general stuff
//let's say you for loop over the randomly selected word and create a for looped variable, each new variable possessing only the string of one letter so there is a variable for each letter from the ranodm word. then, the user input is checked against each variable and if it equals any of the variables, place it intothe underscore display. If a word has two of one letter, loop through the variables somehow, check w3 for string reference.

// consider how to dynamically create or at least populate an object (maybe an array of objects) to store each letter from the random word.

//
