App = {
	firstMove: 'X',
	secondMove: 'O',
	move: 1,
	gameBoard: [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']], // e: empty space
	xWins: 0,
	oWins: 0,
	p1Name: '',
	p2Name: ''
};

App.makeMove = function(el) {
	// Setup work
	var id = el.id;
	var row = id.split('')[0];
	var col = id.split('')[1];

	if (App.move % 2 !== 0) {
		// Place X
		var space = document.getElementById(id);
		space.innerHTML += App.firstMove;

		// Keep track of game state
		App.gameBoard[row][col] = App.firstMove;

	} else {
		var space = document.getElementById(id);
		space.innerHTML += App.secondMove

		// Keep track of game state
		App.gameBoard[row][col] = App.secondMove;
	}

	// CHECK RESULTS once each player has placed 3 pieces
	if (App.move >= 5) {
		// check rows for winner
		for (var i=0; i < 3; i++) {
			if (! App.gameBoard[i].includes('e')) {
				if (! App.gameBoard[i].includes(App.firstMove)) {
					App.winnerIs(App.secondMove);
					return;
				} else if (! App.gameBoard[i].includes(App.secondMove)) {
					App.winnerIs(App.firstMove);
					return;
				}
			}
		}

		// check columns for winner. 
		for (var j=0; j < 3; j++) {
			if (App.gameBoard[0][j] === App.gameBoard[1][j] && App.gameBoard[1][j] === App.gameBoard[2][j]) {
				if (App.gameBoard[0][j] === App.firstMove) {
					App.winnerIs(App.firstMove);
					return;App.gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
				} else if (App.gameBoard[0][j] === App.secondMove) {
					App.winnerIs(App.secondMove);
					return;
				}
			}
		}

		// check major diagonals for winner
		if (App.gameBoard[0][0] === App.gameBoard[1][1] && App.gameBoard[1][1] === App.gameBoard[2][2]) {
			if (App.gameBoard[0][0] === App.firstMove) {
				App.winnerIs(App.firstMove);
				return;
			} else if (App.gameBoard[0][0] === App.secondMove) {
				App.winnerIs(App.secondMove);
				return;
			}
		}

		//check minor diagonals for winner
		if (App.gameBoard[2][0] === App.gameBoard[1][1] && App.gameBoard[1][1] === App.gameBoard[0][2]) {
			if (App.gameBoard[1][1] === App.firstMove) {
				App.winnerIs(App.firstMove);
				return;
			} else if (App.gameBoard[1][1] === App.secondMove) {
				App.winnerIs(App.secondMove);
				return;
			}
		}

	}		
	if (App.move === 9) {
		App.winnerIs('Nobody');
	}

	App.move++;
}

App.winnerIs = function(winner) {
	if (winner === 'X') {
		App.xWins += 1;
	} else if (winner === 'O') {
		App.oWins += 1;
	}
	App.resetGame(winner);
}

App.resetGame = function(winner) {

	// Clear the game board
	elementList = document.querySelectorAll("th");
	for (var element=0; element < elementList.length; element++) {
		elementList[element].innerHTML = '';
	}

	// Reset the game state
	App.gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
	App.move = 1;

	if (winner) { // if function was called due to a win
		if (winner === 'Nobody') {
			// first App.move stays the same
		} else if (winner === 'X') {
			App.firstMove = 'X';
			App.secondMove = 'O';
		} else if (winner === 'O') {
			App.firstMove = 'O';
			App.secondMove = 'X';
		} 
		document.getElementById("whoGoesFirst").innerHTML = `${App.p1Name} goes first`;
		document.getElementById("winTally").innerHTML = `${App.p1Name}: ${App.xWins} points. ${App.p2Name}: ${App.oWins} points`;
	}
}

App.setPlayerName = function(){
	App.p1Name = document.getElementById("p1name").value;
	App.p2Name = document.getElementById("p2name").value;
	document.getElementById("playerPiece").innerHTML = `${App.p1Name}: X, ${App.p2Name}: O`;
	document.getElementById("whoGoesFirst").innerHTML = `${App.p1Name} goes first`;
}