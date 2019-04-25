(function (){
	var speakGoodBye = {};

	var speakWord = "Good Bye ";
	speakGoodBye.speak = function speak(name){
		console.log(speakWord + name)
	}

	window.speakGoodBye = speakGoodBye;
}());