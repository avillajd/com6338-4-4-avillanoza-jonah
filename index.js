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
];

startGame(); 

function startGame() {
// Randomize Words in Array
var word = words[Math.floor(Math.random()* words.length)];
console.log(word)

// Get elements
var wordToGuessEl = document.getElementById('word-to-guess')
var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var scoreEl = document.getElementById('score')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var wins = 0 
var losses = 0
var previousWord = ""

// Place Remaining Guesses on DOM
var remain = 10
remainingGuessesEl.innerHTML = remain

// Displaying Underscores
var correctLetters = []
for (var i = 0; i < word.length; i++) {
  correctLetters[i] = "_";
}
wordToGuessEl.innerHTML=correctLetters.join("")

// Populating Scores & Correct Letters

// key up with console log of type choice
document.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  console.log(e.key)

if (incorrectLettersEl.innerHTML.includes(key) || !key.match(/[a-z]/i)) {
    return;
}

if (word.indexOf(key) == -1) {
  incorrectLettersEl.innerHTML += key;
  remain--;
  remainingGuessesEl.innerHTML = remain;

  if (remain == 0) {
    losses++;
    previousWord = "";
    startGame();
    console.log("You Lose!")
  }
} else {
  for (var i = 0; i < word.length; i++) {
    
    if (word[i] == key) {
      correctLetters[i] = key;
    }
  }

  wordToGuessEl.innerHTML = correctLetters.join("");

  if (!correctLetters.includes("_")) {
    wins++;
    previousWord = word;
    startGame();
    console.log("You Win!")
  }
}
};


//  Win or Lose Function with New Round Function
// winner();
// loser();
// resetGame();


// function winner() {
//   if (correctLetters.join("") == 1) {
//     wins++;
//     console.log("you won!")
//   }
// }

// function loser() {
//   if (remain == 0) {
//     losses ++; 
//     resetGame();
//     console.log("Thats a Loss !")
//   }

// }

// function resetGame () {
//     remain = 10;
//     correctLetters = [];
//     word = words[Math.floor(Math.random()* words.length)];
//   }


  

}
