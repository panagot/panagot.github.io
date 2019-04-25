(function (){
	var speakHello = {};

	var speakWord = "Hello "
	speakHello.speak = function speak(name){
		console.log(speakWord + name);
	}

	window.speakHello = speakHello;
})();