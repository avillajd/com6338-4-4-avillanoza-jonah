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

// Place Remaining Guesses on DOM
var remain = 10
remainingGuessesEl.innerHTML = remain

// // HAVE TO MOVE THIS DOWN TO BE A FUNCTION WITH TYPE CHOICES*** 
// document.onkeyup = function(e) {
//   var key = e.key.toLowerCase()
//   console.log(e.key)
// }

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

if (word.indexOf(key)== -1) {
  incorrectLettersEl.innerHTML += key
  remain --
  remainingGuessesEl.innerHTML= remain
  console.log("wrong boi!")
} else {
  for (var i = 0; i < word.length; i++) {
    if(word[i]== key)
    correctLetters[i] = key
    console.log("dats right! keep going!")
  }
}
wordToGuessEl.innerHTML= correctLetters.join("")
}

if (correctLetters.join("") == word) {
  wins++;
  console.log("You Won!")
}

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

