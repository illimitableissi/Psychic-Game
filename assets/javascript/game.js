
// Game Logics
var wrongLetters = [];
var currentWordIndex = "";
var answerDisplay = [];
var currentWrdLetters = [];
var numBlanks = 0;

// Stats
var wins = 0;
var losses = 0;
var remainingGuesses = 8;

// Arrays listing every letter of the alphabet
var userchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var ComputerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var displayLosses = document.getElementById("display-losses");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/sounds/Get Over Here!.mp3");


// New Game
function newGame() {

    // Generates random word from words array
    currentWordIndex = words[Math.floor(Math.random() * words.length)];
        console.log("The current word is: " + currentWordIndex);
    // Splits word up by letters
    currentWrdLetters = currentWordIndex.split("");
        console.log("The number of letters are: " + currentWrdLetters)
    // shows number of blanks needed for randomly generated word
    numBlanks = currentWrdLetters.length;
        console.log("The number of listters in current word: " + numBlanks);
   
    //resets variables
    remainingGuesses = 8;
    wrongLetters = [];
    answerDisplay = [];

    // pushed underscore to answerdisplay array for total number of letters for word
    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_");
        console.log(answerDisplay)
    }
    //reset HTML variables
    currentWord.textContent = "Current Word: " + " " + answerDisplay.join(" ");
    guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
    displayWins.textContent = "Wins: " + " " + wins;
    displayLosses.textContent = "Losses: " + " " + losses;
        
}

// Letter Check
function checkLetter(letter) {

//Get input from user on what keys are being pressed
document.onkeyup = function(event) {
    userGuess = event.key;

        //Check if the letter pressed is an actual letter
    var userGuessLower = userGuess.toLowerCase()
    console.log(userGuessLower)
    
        if (characters.indexOf(userGuessLower) === 1) {}
} 
}
    
            //Check if the letter guessed is one of the letters in the word


// Round by Round
function round(){

    currentWord.textContent = "Current Word: " + " " + answerDisplay.join(" ");
    guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
    alreadyGuessed.textContent = "Letters Already Guessed: " + " " + wrongLetters.join(" ")


//When player wins
    if (currentWrdLetters.toString() == answerDisplay.toString()) {
        wins++;
        alert("You guessed ;" + currentWordindex + " ")
        audioElement.play()
        displayWins.textContent = "Wins: " + " " + wins;

        newGame();
        alreadyGuessed.textContent = "Letters Already Guessed: " + " " + " ";
//when player losses
    } else if (remainingGuesses == -1) {
        losses++;
        alert("FATALITY")
        displayLosses.textContent = "Losses: " + " " + losses;
        newGame();
        alreadyGuessed.textContent = "Letters Already Guessed: " + " " + " ";
    }
}

// Play the Game
newGame();

//Get input from user on what keys are being pressed
document.onkeyup = function(event) {
    userGuess = event.key;

    //Create a variable to hold all the letters that have been guessed
    var ltrsGuessed = String.fromCharCode(event.key).toLowerCase();
        console.log("You Guessed the letter: " + userGuess); // Testing via Console.Log
    }
    //Run the check letters function
    checkLetter();
    round();

