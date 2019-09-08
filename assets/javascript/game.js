
// Game Logics
var wrongLetter = [];

// Stats
var wins = 0;
var losses = 0;
var remainingGuesses = 8;

// Arrays listing every letter of the alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// Variables that hold references to the places in the HTML.
var displayWins = document.getElementById("display-wins");
var displayLosses = document.getElementById("display-losses");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var scorpion = document.getElementById("Scorpion");
var fatality = document.getElementById("Fatality")


// New Game
function newGame () {
// Generates random letter from  array
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("The computer's choice is: " + computerGuess);


// Updates fields
    remainingGuesses = 8;
    wrongLetter = [];
    displayWins.textContent ="Wins: " + " " + wins;
    displayLosses.textContent = "Losses: " + " " + losses;
    guessesRemaining.textContent ="Number of Guesses Remaining: " + " " + remainingGuesses;
    alreadyGuessed.textContent ="Letters Already Guessed" + " " + wrongLetter;
}

 document.onkeydown = function(event) {
    var userGuess = event.key
        console.log(userGuess)
        
//if user guesses correctly
    if(userGuess === computerGuess) {
        scorpion.play();
        alert("You guessed " + computerGuess + " correctly!");
        displayWins.textContent = "Wins: " + " " + wins++;
        newGame();
    
//when player guess is incorrect 
    } else  {
        remainingGuesses-- ;
        displayLosses.textContent = "Losses: " + " " + losses;
        alreadyGuessed.textContent = "Letters Already Guessed: " + " " + wrongLetter.push(userGuess);
    }

    if(remainingGuesses === -0) {
        fatality.play();
        alert("FATALITY!!")
        losses++;
        newGame();
        
    }
}
newGame()




