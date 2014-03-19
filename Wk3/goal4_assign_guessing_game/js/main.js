/**
 * GUESSING GAME:
 *
 * Created By: Alan Sodek
 * Date: March 18, 2014
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

	var playersGuess = 0;
	var guessesRemaining = 3;
	var guessesMade = 0;
	
	//Define dom elements.
	var dom = {
		input: document.querySelector("#input"),
		output: document.querySelector("#output"),
		button: document.querySelector("button")		
	};
	
	//Computer picks random number. 
	var magicNum = Math.floor((Math.random() * 10) + 1);
	
	//Each time user clicks, console remaining guesses and call validateInput.
	var clickFn = function(e){
		console.log(guessesRemaining);
		validateInput();
	};
	
	//validate user guess/input and call playGame.
	var validateInput = function(){
		playersGuess = parseInt(dom.input.value);
		
		if(isNaN(playersGuess)){
			dom.output.innerHTML = "Please enter a number.";
			
		}else if(playersGuess < 1 || playersGuess > 10){
			dom.output.innerHTML = "Please enter a number between 1 and 10.";
		
		}else{
			playGame();
		};
	};	
		
	//Play the game.
	var playGame = function(){
		guessesRemaining--;
		guessesMade++;
		gameState = "Guess " + guessesMade + ", Remaining: " + guessesRemaining;
		playerGuess = parseInt(input.value);
		
		if(playerGuess > magicNum){
			dom.output.innerHTML = "That's too high." + gameState;
			
		}else if (playersGuess < magicNum){
			dom.output.innerHTML = "That's too low." + gameState;
			
		}else if (playersGuess === magicNum){
			gameOver(true);
		};
		
		if(guessesRemaining < 1){
			console.log("Game Over : guessesRemaining is < 1");
			gameOver(false);
		};
	};

})();