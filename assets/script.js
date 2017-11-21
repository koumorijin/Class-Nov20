 $(document).ready(function() {

 var gameLogic = {

    NumGuesses: 15,
  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice: function() {

  		this.wordArray[Math.floor(Math.random()*this.wordArray.length)]
  	},


  	buildDisplayArray: function() {
  		for (var index = 0; index<this.wordArray.length; index++) {
  			displayArray.push(" _ ");
      }  
    },

    onkeydown: function(){
      var GuessesLeft = NumGuesses--;
      alert(DecGuessesLeft + " Guesses left")
    }  
};

  var EasyLogic = {
    wordArray: ["dog","cat","fish","bird","cow","pig"],
    NumGuesses: 30,
    displayArray: [],
    guesses: [],
  


  	buildDisplayArray: function() {
  		for (var index = 0; index<this.wordArray.length; index++) {
  			this.displayArray.push(" _ ");
  		}
    },


  	updateScreen: function() {
  		$("#answerDisplay").html(this.displayArray);
  	}
	};
gameLogic.computerChoice();

EasyLogic.updateScreen();



});
