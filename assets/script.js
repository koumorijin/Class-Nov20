 var gameLogic = {

  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice: function() {
  		this.wordArray[Math.floor(Math.random()*this.wordArray.length)];
  		console.log(this.computerChoice);
  	},

  	buildDisplayArray: function() {
  		for (var index = 0; index<this.wordArray.length; index++) {
  			this.displayArray.push(" _ ");
  		};

  		},
  	updateScreen: function() {
  		$("#answerDisplay").html(this.displayArray);

  		}
  		};
gameLogic.computerChoice();
gameLogic.buildDisplayArray();
gameLogic.updateScreen();
