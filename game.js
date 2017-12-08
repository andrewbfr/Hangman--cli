// game logic only
// this will receive user input through the inquirer.prompt
// letter will be stored in a letter array
//The completed game should be able to receive user input using the inquirer or prompt npm packages.

var word = require("./word.js");
var letter = require("./letter.js");

var wordBank = ["circle", "square", "math", "toast", "password", "pen", "pin", "pan", "pun", "gym", "roast", "most", "corner", "vertices", "fry", "slalom", "crust", "linear", "marshmellow", "reserved", "banana", "fork", "hang"];

var wordFill = wordBank[Math.floor(Math.random() * wordBank.length)];



console.log(wordFill);
