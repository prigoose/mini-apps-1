// CONTROLLER FUNCTIONS

var makeMove = function(el) { 
	// make move is a controller fxn. When the user clicks, makeMove runs and 
	// in turn updates the model and the view

	// Setup work
	var id = el.id;
	var row = id.split('')[0];
	var col = id.split('')[1];
	// console.log(document.getElementById(id).innerHTML.length);
	if (document.getElementById(id).innerHTML === '') {
		GameState.move++;

		// Update view
		View.showMove(id);

		// Update model
		GameState.updateBoard(row, col);
	}
	
}

resetGame = function(winner) {
	View.clear();
	View.updateWinsLosses(winner);
	GameState.reset();
}


// GAME STATE CODE

var GameState = { 
	gameBoard: [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']], // e: empty space
	move: 0,
	winner: '',
	xWins: 0, // should # of wins be on game state or presentation?
	oWins: 0
}

GameState.updateBoard = function(row, col) {
	// Update Board
	if (GameState.move % 2 !== 0) {
		GameState.gameBoard[row][col] = View.firstMove;
	} else {
		GameState.gameBoard[row][col] = View.secondMove;
	}
	
	// CHECK RESULTS once each player has placed 3 pieces
	if (GameState.move > 5) {
		GameState.checkResults();
	}
}

GameState.checkResults = function() {
	// check rows for winner
		for (var i=0; i < 3; i++) {
			if (! GameState.gameBoard[i].includes('e')) {
				if (! GameState.gameBoard[i].includes(View.firstMove)) {
					GameState.winnerIs(View.secondMove);
					return;
				} else if (! GameState.gameBoard[i].includes(View.secondMove)) {
					GameState.winnerIs(View.firstMove);
					return;
				}
			}
		}

		// check columns for winner. 
		for (var j=0; j < 3; j++) {
			if (GameState.gameBoard[0][j] === GameState.gameBoard[1][j] && GameState.gameBoard[1][j] === GameState.gameBoard[2][j]) {
				if (GameState.gameBoard[0][j] === View.firstMove) {
					GameState.winnerIs(View.firstMove);
					return;GameState.gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
				} else if (GameState.gameBoard[0][j] === View.secondMove) {
					GameState.winnerIs(View.secondMove);
					return;
				}
			}
		}

		// check major diagonals for winner
		if (GameState.gameBoard[0][0] === GameState.gameBoard[1][1] && GameState.gameBoard[1][1] === GameState.gameBoard[2][2]) {
			if (GameState.gameBoard[0][0] === View.firstMove) {					
				GameState.winnerIs(View.firstMove);
				return;
			} else if (GameState.gameBoard[0][0] === View.secondMove) {
				GameState.winnerIs(View.secondMove);
				return;
			}
		}

		//check minor diagonals for winner
		if (GameState.gameBoard[2][0] === GameState.gameBoard[1][1] && GameState.gameBoard[1][1] === GameState.gameBoard[0][2]) {
			if (GameState.gameBoard[1][1] === View.firstMove) {
				GameState.winnerIs(View.firstMove);
				return;
			} else if (GameState.gameBoard[1][1] === View.secondMove) {
				GameState.winnerIs(View.secondMove);
				return;
			}
		}
	
		if (GameState.move === 9) {
			GameState.winnerIs('Nobody');
		}

}

GameState.winnerIs = function(winner) {

	if (winner === 'X') {
		GameState.xWins += 1;
	} else if (winner === 'O') {
		GameState.oWins += 1;
	}
	
	resetGame(winner);

}

GameState.reset = function() {
// Reset the game state
	GameState.gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']];
	GameState.move = 1;

}


// VIEW CODE

var View = {
	firstMove: 'X',
	secondMove: 'O',
	p1Name: '',
	p2Name: ''
};

View.showMove = function(id) {
	
	if (GameState.move % 2 !== 0) {
		// Place 'X'
		var space = document.getElementById(id);
		space.innerHTML += View.firstMove;
	} else {
		// Place 'O'
		var space = document.getElementById(id);
		space.innerHTML += View.secondMove
	}

}

View.clear = function(winner) {

	// Clear the game board
	elementList = document.querySelectorAll("th");
	for (var element=0; element < elementList.length; element++) {
		elementList[element].innerHTML = '';
	}
}

View.updateWinsLosses = function(winner) {
	if (winner) { // if function was called due to a win
		if (winner === 'Nobody') {
			// first App.move stays the same
		} else if (winner === 'X') {
			View.firstMove = 'X';
			View.secondMove = 'O';
		} else if (winner === 'O') {
			View.firstMove = 'O';
			View.secondMove = 'X';
		} 
		document.getElementById("whoGoesFirst").innerHTML = `${View.p1Name} goes first`;
		document.getElementById("winTally").innerHTML = `${View.p1Name}: ${GameState.xWins} points. ${View.p2Name}: ${GameState.oWins} points`;
	}
}

View.setPlayerName = function(){
	View.p1Name = document.getElementById("p1name").value;
	View.p2Name = document.getElementById("p2name").value;
	document.getElementById("playerPiece").innerHTML = `${View.p1Name}: X, ${View.p2Name}: O`;
	document.getElementById("whoGoesFirst").innerHTML = `${View.p1Name} goes first`;
}