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

var wordToGuessEl = document.getElementById('word-to-guess')
var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var scoreEl = document.getElementById('score')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var wins = 0 
var losses = 0
var remainingGuesses = 10

document.onkeyup = function(e) {
  console.log(e.key)
}



