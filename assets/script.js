 $(document).ready(function() {

 var gameLogic = {

    NumGuesses: 15,
  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	singleWord: "",//this.wordArray,//[Math.floor(Math.random() * this.wordArray.length)],
  	
  	computerChoice: function() {
  		this.singleWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)]
  		//console.log(singleWord);
  	},

  	buildDisplayArray: function() {
  		// for (var index = 0; index < this.singleWord.length; index++) {
  		// 	this.displayArray[index] = " _ ";
    //   	}
    //   	console.log(this.displayArray);  
    },

    onkeydown: function(){
      var GuessesLeft = NumGuesses--;
      alert(DecGuessesLeft + " Guesses left")
    }  
};

gameLogic.computerChoice();
console.log(gameLogic.singleWord);
gameLogic.buildDisplayArray();
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
