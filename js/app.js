function getUserWords() {
	var newBlock = prompt("What would you like your partner to guess?");
	if (newBlock == "") {
		alert("Please enter something!");
		getUserWords();
	} else {
		HANG.saveBlock(newBlock);
	}

}

getUserWords();

setTimeout(function() {
	HANG.getGuess();
}, 100);
