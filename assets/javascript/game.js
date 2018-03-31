//variables go here
var answers = ["spock", "kirk", "enterprise", "picard"];

const maxTries = 10;  //maximum failz
var guess; 
var goodLetters = []; 
var badLetters = []; 
var counter = 0; //counts correct letters
var remainingGuesses = 0;       // How many tries the player has left
var hasFinished = false;        // 'press any key to try again'     
var wins = 0;                   
var winCount = document.getElementById("win-count");
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

var word = answers[Math.floor(Math.random() * answers.length)];



function start() {
    for (i = 0; i < word.length; i++) {
      goodLetters[i] = "__";
    }
  
    document.getElementById("answer").innerHTML = goodLetters.join(" ");
    console.log(word);
  }
  
  function checkLetter() {
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
      var found = false; 
      for (i = 0; i < word.length; i++) {
        if (guess === word[i]) {
          goodLetters[i] = guess;
          document.getElementById("answer").innerHTML = goodLetters.join(" ");
          found = true;
        }
      }
      
      if (found) return; 
      
   
      if (badLetters.indexOf(guess) < 0) {
        badLetters.push(guess);
        document.getElementById("wrongGuesses").innerHTML = badLetters.join(" ");
      }

      if (remainingGuesses.indexOf(guess) < 0) {
        badLetters.push(guess);
        document.getElementById("remainingGuesses").losses++;
      }
//Somewhere in here, I need to figure out subtracting remainingGuesses from maxTries and once it loops through down to zero, the game is over.
//If the player loses, display youlose.jpg (sobbing mathematically meme)
//If the player completes the world when the game is over, display kirk.jpg (the captain ready to party)
//A reset button should happen, the game would reload to another random string in the array. Maybe an alert?
    }
  }
  
  start();
  checkLetter();