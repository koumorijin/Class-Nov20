 $(document).ready(function() {

 var gameLogic = {

    NumGuesses: 15,
  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice: function() {

  		wordArray[Math.floor(Math.random()*this.wordArray.length)]
    },

  	buildDisplayArray: function() {
  		for (var index = 0; i<this.wordArray.length; index++) {
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
    guesses: []
  };

  		//this.wordArray[Math.floor(Math.random()*this.wordArray.length)];
  		//console.log(this.computerChoice);
  	//}

  	buildDisplayArray = function() {
  		for (var index = 0; index<this.wordArray.length; index++) {
  			this.displayArray.push(" _ ");
  		}
    }
//buildDisplayArray();

  	updateScreen = function() {
  		$("#answerDisplay").html(this.displayArray);
  	}

gameLogic.computerChoice();
gameLogic.buildDisplayArray();
gameLogic.updateScreen();



  		// $("#answerDisplay").html(this.displayArray);

  		// }
  		//};
gameLogic.computerChoice();
gameLogic.buildDisplayArray();
gameLogic.updateScreen();

});
