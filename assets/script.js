 $(document).ready(function() {

 var gameLogic = {

    NumGuesses: 15,
  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice: function() {
<<<<<<< HEAD

  		wordArray[Math.floor(Math.random()*this.wordArray.length)]
    },
=======
  		this.wordArray[Math.floor(Math.random()*this.wordArray.length)]
  	},
>>>>>>> 517792fe900669489427118568f0afc5e673a816

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

<<<<<<< HEAD
=======
  		}

  		};
>>>>>>> 517792fe900669489427118568f0afc5e673a816
gameLogic.computerChoice();
gameLogic.computerChoice();
gameLogic.updateScreen();

<<<<<<< HEAD


  		// $("#answerDisplay").html(this.displayArray);

  		// }
  		//};
gameLogic.computerChoice();
gameLogic.buildDisplayArray();
gameLogic.updateScreen();

});
=======
>>>>>>> 517792fe900669489427118568f0afc5e673a816
