 $(document).ready(function() {

 var gameLogic = {

    NumGuesses: 15;
  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice: function() {
  		wordArray[Math.floor(Math.random()*wordArray.length)],
    },

  	buildDisplayArray: function() {
  		for (var index = 0; i<wordArray.length; index++) {
  			displayArray.push(" _ ");
      }  
    },

    onkeypress = function(){
      var GuessesLeft = NumGuesses--;
      alert(DecGuessesLeft + " Guesses left")
    }  
};

  var EasyLogic {
    wordArray: ["dog","cat","fish","bird","cow","pig"];
    NumGuesses: 30;
    displayArray: [];
    guesses: [];
  }

  	updateScreen: function() {
  		$("#answerDisplay").html(displayArray);
  		}

computerChoice();
buildDisplayArray();
updateScreen();

});