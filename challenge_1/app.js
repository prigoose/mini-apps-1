var firstMove = 'X';
var secondMove = 'O';
var move = 1;
var gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']]; // e = empty space
var xWins = 0;
var oWins = 0;
var p1Name = '';
var p2Name = '';

var makeMove = function(el) {
	// Setup work
	var id = el.id;
	var row = id.split('')[0];
	var col = id.split('')[1];

	if (move % 2 !== 0) {
		// Place X
		var space = document.getElementById(id);
		space.innerHTML += firstMove;

		// Keep track of game state
		gameBoard[row][col] = firstMove;

	} else {
		var space = document.getElementById(id);
		space.innerHTML += secondMove

		// Keep track of game state
		gameBoard[row][col] = secondMove;
	}

	// CHECK RESULTS once each player has placed 3 pieces
	if (move >= 5) {
		// check rows for winner
		for (var i=0; i < 3; i++) {
			if (! gameBoard[i].includes('e')) {
				if (! gameBoard[i].includes(firstMove)) {
					winnerIs(secondMove);
					return;
				} else if (! gameBoard[i].includes(secondMove)) {
					winnerIs(firstMove);
					return;
				}
			}
		}

		// check columns for winner. 
		for (var j=0; j < 3; j++) {
			if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
				if (gameBoard[0][j] === firstMove) {
					winnerIs(firstMove);
					return;gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
				} else if (gameBoard[0][j] === secondMove) {
					winnerIs(secondMove);
					return;
				}
			}
		}

		// check major diagonals for winner
		if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
			if (gameBoard[0][0] === firstMove) {
				winnerIs(firstMove);
				return;
			} else if (gameBoard[0][0] === secondMove) {
				winnerIs(secondMove);
				return;
			}
		}

		//check minor diagonals for winner
		if (gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[0][2]) {
			if (gameBoard[1][1] === firstMove) {
				winnerIs(firstMove);
				return;
			} else if (gameBoard[1][1] === secondMove) {
				winnerIs(secondMove);
				return;
			}
		}

	}		
	if (move === 9) {
		winnerIs('Nobody');
	}

	move++;
}

var winnerIs = function(winner) {
	if (winner === 'X') {
		xWins += 1;
	} else if (winner === 'O') {
		oWins += 1;
	}
	resetGame(winner);
}

var resetGame = function(winner) {

	// Clear the game board
	elementList = document.querySelectorAll("th");
	for (var element=0; element < elementList.length; element++) {
		elementList[element].innerHTML = '';
	}

	// Reset the game state
	gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
	move = 1;

	if (winner) { // if function was called due to a win
		if (winner === 'Nobody') {
			// first move stays the same
		} else if (winner === 'X') {
			firstMove = 'X';
			secondMove = 'O';
		} else if (winner === 'O') {
			firstMove = 'O';
			secondMove = 'X';
		} 
		document.getElementById("whoGoesFirst").innerHTML = `Player ${firstMove} goes first`;
		document.getElementById("winTally").innerHTML = `${p1Name}: ${xWins} points. Player ${p2Name}: ${oWins} points`;
	}
}

var setPlayerName = function(){
	p1Name = document.getElementById("p1name").value;
	p2Name = document.getElementById("p2name").value;
	console.log('does this form action thingy work?')
	document.getElementById("playerPiece").innerHTML = `${p1Name}: X, ${p2Name}: O`;
	document.getElementById("whoGoesFirst").innerHTML = `${p1Name} goes first`;

}