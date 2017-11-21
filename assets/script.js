 var gameLogic = {

  	wins: 0,
  	losses: 0,
  	wordArray: ["kitten", "towel", "flower"],
  	displayArray: [],
  	guesses: [],
  	computerChoice:
  		wordArray[Math.floor(Math.random()*wordArray.length)],

  	buildDisplayArray: function() {
  		for (var index = 0; i<wordArray.length; index++) {
  			displayArray.push(" _ ");
  		}

  		},
  	updateScreen: function() {
  		$("#answerDisplay").html(displayArray);

  		}
  		};
computerChoice();
buildDisplayArray();
updateScreen();
