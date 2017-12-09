// active word logic only
//Used to create an object representing the current word the user is attempting to guess.This should contain word specific logic and data.
var letter = require("./letter.js")



//word constructor function
function Word(word) {
    this.word = word
}

//trying to remotely make the underscore generator as a prototype, export it and require in the game.js

Word.prototoype.underGen = function(){
    
}
console.log("word");


module.exports = Word;