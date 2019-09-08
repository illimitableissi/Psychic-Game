
// Game Logics
var currentLtrIndex = "";
var answerDisplay = [];

// Stats
var wins = 0;
var losses = 0;
var remainingGuesses = 5;

// Arrays listing every letter of the alphabet
var userchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var displayLosses = document.getElementById("display-losses");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/sounds/Get Over Here!.mp3");


// New Game
function newGame() {

    // Generates random letter from  array
    currentLtrIndex = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("The current letter is: " + currentLtrIndex);
}   
    //resets variables
    remainingGuesses = 5;
    answerDisplay = [];
    wins = 0;
    losses = 0;

    //reset HTML variables
    guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
    displayWins.textContent = "Wins: " + " " + wins;
    displayLosses.textContent = "Losses: " + " " + losses;
        

// // Round by Round
// function round(){

//     currentWord.textContent = "Current Word: " + " " + answerDisplay.join(" ");
//     guessesRemaining.textContent = "Number of Guesses Remaining: " + " " + remainingGuesses;
//     alreadyGuessed.textContent = "Letters Already Guessed: " + " " + wrongLetters.join(" ")


// //When player wins
//     if (currentWrdLetters.toString() == answerDisplay.toString()) {
//         wins++;
//         alert("You guessed ;" + currentWordindex + " ")
//         audioElement.play()
//         displayWins.textContent = "Wins: " + " " + wins;

//         newGame();
//         alreadyGuessed.textContent = "Letters Already Guessed: " + " " + " ";
// //when player losses
//     } else if (remainingGuesses == -1) {
//         losses++;
//         alert("FATALITY")
//         displayLosses.textContent = "Losses: " + " " + losses;
//         newGame();
//         alreadyGuessed.textContent = "Letters Already Guessed: " + " " + " ";
//     }
// }

// // Play the Game
newGame();
// round();

