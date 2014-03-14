// Alan Sodek
// March 12, 2014
// The Duel - Part III

//self-executing function
(function(){

	var buttonBlue = document.querySelector(".buttonblue");
	console.log(buttonBlue);
	
	buttonBlue.onclick = fight();	
	console.log("program starts");

	

	console.log("FIGHT!!!");
	
	var opponents = {
		fighters: [
			{name:"Spiderman", damage:20, health:100},
			{name:"Batman", damage:20, health:100},
		]
	};
	
	var round = 0;

	function fight(){
		console.log("in the fight function");
		
		//alert(opponents.fighters[0].name + ":" + opponents.fighters[0].health + " *START* " + opponents.fighters[1].name + ":" + opponents.fighters[1].health);
		
			//Math.floor(Math.random() * (max - min) + min);
			
			var opponents = {
				fighters: [
					{name:"Spiderman", damage:20, health:100},
					{name:"Batman", damage:20, health:100},
				]
				
			var minDamage1 = opponents.fighters[0].damage * .5;
			var minDamage2 = opponents.fighters[1].damage * .5;
			var f1 = Math.floor(Math.random()*(opponents.fighters[0].damage-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(opponents.fighters[1].damage-minDamage2)+minDamage2);
			
			
			//inflict damage
			opponents.fighters[0].health-=f1;
			opponents.fighters[1].health-=f2;
			
			console.log(opponents.fighters[0].name + ":" + opponents.fighters[0].health + " " + opponents.fighters[1].name + ":" + opponents.fighters[1].health);
			
			var results = winnerCheck();
			console.log(results);
			
			if(results === "no winner"){
				round++;
				//alert(opponents.fighters[0].name + ":" + opponents.fighters[0].health + " *ROUND " + round + " OVER* " + opponents.fighters[1].name + ":" + opponents.fighters[1].health);
			}else{
				
				break
			}
			
		};
	};
	
	var fightBox = document.getElementById('fight_box');
	console.log(fightBox);
	
	function winnerCheck(){
		console.log("in winnerCheck FN");
	
		var result = "no winner";
		
		if(opponents.fighters[0].health < 1 && opponents.fighters[1].health < 1){
			result = "You both Die";
		}else if(opponents.fighters[0].health < 1){
			result = opponents.fighters[1].name + " WINS!!!"
		}else if(opponents.fighters[1].health < 1){
			result = opponents.fighters[0].name + " WINS!!!"
		};
		
		return result;
		
	};


})();