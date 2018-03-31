//variables go here
var answers = ["spock", "kirk", "enterprise", "picard"];

var maxTries = 10;  //maximum failz
var guess; 
var goodLetters = []; 
var badLetters = []; 
var counter = 0; //counts correct letters
var remaining = 10;       // How many tries the player has left
var hasFinished = false;        // 'press any key to try again'     
var wins = 0;                   
var winCount = document.getElementById("win-count");
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

var word = answers[Math.floor(Math.random() * answers.length)];



var letterCount = 0;

function start() {
    letterCount = word.length; // Initializing the letterCount to the length of the word
    for (i = 0; i < word.length; i++) {
      goodLetters[i] = "__";
    }
    document.getElementById("remainingGuesses").innerHTML = maxTries; // this will initialize the counter
    document.getElementById("answer").innerHTML = goodLetters.join(" ");
    console.log(word);
  }
  
  function checkLetter() {
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
      var found = false; 
      remaining--;
      for (i = 0; i < word.length; i++) {
        if (guess === word[i]) {
          goodLetters[i] = guess;
          document.getElementById("answer").innerHTML = goodLetters.join(" ");
         
         letterCount-- ; // subtracting from the count for successful tries
          found = true;    
              
        }
     
      
      }

     

      if(letterCount == 0){
        alert("Win!");
        //display Kirk
      }

      document.getElementById("remainingGuesses").innerHTML = remaining;

      if (found) return; 
      
   
      if (badLetters.indexOf(guess) < 0) {
        badLetters.push(guess);
        document.getElementById("wrongGuesses").innerHTML = badLetters.join(" ");
      
        document.getElementById("remainingGuesses").innerHTML = remaining;
      }

      if (remaining <= 0){
        alert("Damn");
      }

   

//Somewhere in here, I need to figure out subtracting remainingGuesses from maxTries and once it loops through down to zero, the game is over.
//If the player loses, display youlose.jpg (sobbing mathematically meme)
//If the player completes the world when the game is over, display kirk.jpg (the captain ready to party)
//A reset button should happen, the game would reload to another random string in the array. Maybe an alert?
    }
  }
  
  start();
  checkLetter();
