var newBlock = prompt("What would you like your partner to guess?");

HANG.saveBlock(newBlock);

setTimeout(function() {
	HANG.getGuess();
}, 100);
