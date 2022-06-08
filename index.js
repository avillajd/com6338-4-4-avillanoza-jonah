var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

// var wins = 0 
// var losses = 0
// var previousWord = ""

// startGame(); 

// function startGame() {
// // Randomize Words in Array
// var word = words[Math.floor(Math.random()* words.length)];
// console.log(word)

// // Get elements
// var wordToGuessEl = document.getElementById('word-to-guess')
// var previousWordEl = document.getElementById('previous-word')
// var incorrectLettersEl = document.getElementById('incorrect-letters')
// var remainingGuessesEl = document.getElementById('remaining-guesses')
// var scoreEl = document.getElementById('score')
// var winsEl = document.getElementById('wins')
// var lossesEl = document.getElementById('losses')




// // Place Remaining Guesses on DOM
// var remain = 10
// remainingGuessesEl.innerHTML = remain

// // Displaying Underscores
// var correctLetters = []
// for (var i = 0; i < word.length; i++) {
//   correctLetters[i] = "_";
// }
// wordToGuessEl.innerHTML=correctLetters.join("")

// // Populating Scores & Correct Letters

// // key up with console log of type choice
// document.onkeyup = function(e) {
//   var key = e.key.toLowerCase()
//   console.log(e.key)

// if (incorrectLettersEl.innerHTML.includes(key) || !key.match(/[a-z]/i)) {
//     return;
// }

// if (word.indexOf(key) == -1) {
//   incorrectLettersEl.innerHTML += key;
//   remain--;
//   remainingGuessesEl.innerHTML = remain;

//   if (remain == 0) {
//     losses++;
//     previousWord = "";
//     startGame();
//   }
// } else {
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] == key) {
//       correctLetters[i] = key;
//     }
//   }

//   wordToGuessEl.innerHTML = correctLetters.join("");

//   if (!correctLetters.includes("_")) {
//     wins++;
//     previousWord = word;
//     startGame();
//   }
// }
// };


// //  Win or Lose Function with New Round Function
// // winner();
// // loser();
// // resetGame();


// // function winner() {
// //   if (correctLetters.join("") == 1) {
// //     wins++;
// //     console.log("you won!")
// //   }
// // }

// // function loser() {
// //   if (remain == 0) {
// //     losses ++; 
// //     resetGame();
// //     console.log("Thats a Loss !")
// //   }

// // }

// // function resetGame () {
// //     remain = 10;
// //     correctLetters = [];
// //     word = words[Math.floor(Math.random()* words.length)];
// //   }


  

// }

var wordToGuessEl = document.getElementById('word-to-guess')
var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')

var wins = 0 
var losses = 0
var remainingGuesses 
var correctLetters
var incorrectLetters
var currentWord
var displayWord

// Create a new Game once the user wins or losses
function newGame() {
  currentWord = words[Math.floor(Math.random()* words.length)]
  console.log(currentWord)
  correctLetters = []
  incorrectLetters = []
  remainingGuesses = 10
  updateGuessesInfo() // updateGuesses function below
}
// update the interface depending on what the user types
function updateGuessesInfo(){
  displayWord = ""

  for (var i = 0; i < currentWord.length; i ++){
    if(correctLetters.indexOf(currentWord[i]) > -1){
      displayWord += currentWord[i]

    } else{
      displayWord += '_'
    }
  }

  remainingGuessesEl.textContent = remainingGuesses
  incorrectLettersEl.textContent = incorrectLetters.join(", ")
  wordToGuessEl.textContent = displayWord
}

//create the key press functionality
document.onkeyup = function (e){

  var guessedLetter = e.key.toLowerCase()
  
  if (currentWord.includes(guessedLetter)) {
    correctLetters.push(guessedLetter)
  } else if (!currentWord.includes(guessedLetter)){
    incorrectLetters.push(guessedLetter)

    remainingGuesses --
  }

  updateGuessesInfo()

  if (displayWord === currentWord){
    wins ++
    winDisplay.textContent = wins
    previousWordEl.textContent = currentWord
    newGame()
  }

  if(remainingGuesses <= 0){
    losses ++
    lossDisplay.textContent = losses
    previousWordEl.textContent = ""
    newGame ()
  }

}

newGame()

