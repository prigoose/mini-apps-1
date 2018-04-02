var move = 1;
var gameBoard = [['e', 'e', 'e'],['e', 'e', 'e'],['e', 'e', 'e']]; // e = empty space

var makeMove = function(el) {
	// Setup work
	var id = el.id;
	var row = id.split('')[0];
	var col = id.split('')[1];

	if (move % 2 !== 0) {
		// Place X
		var space = document.getElementById(id);
		space.innerHTML += 'X';

		// Keep track of game state
		gameBoard[row][col] = 'X';

	} else {
		var space = document.getElementById(id);
		space.innerHTML += 'O'

		// Keep track of game state
		gameBoard[row][col] = 'O';
	}

	// CHECK RESULTS once each player has placed 3 pieces
	if (move >= 5) {
		// check rows for winner
		for (var i=0; i < 3; i++) {
			if (! gameBoard[i].includes('e')) {
				if (! gameBoard[i].includes('X')) {
					console.log('O wins on row ', i);
					winnerIs('O');
					return;
				} else if (! gameBoard[i].includes('O')) {
					console.log('X wins on row ', i);
					winnerIs('X');
					return;
				}
			}
		}

		// check columns for winner. 
		for (var j=0; j < 3; j++) {
			if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
				if (gameBoard[0][j] === 'X') {
					console.log('X wins on col ', j);
					winnerIs('X');
					return;
				} else if (gameBoard[0][j] === 'O') {
					console.log('O wins on col ', j);
					winnerIs('O');
					return;
				}
			}
		}

		// check major diagonals for winner
		if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
			if (gameBoard[0][0] === 'X') {
				console.log('X wins on diagonal');
				winnerIs('X');
				return;
			} else if (gameBoard[0][0] === 'O') {
				console.log('O wins on diagonal');
				winnerIs('O');
				return;
			}
		}

		//check minor diagonals for winner
		if (gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[0][2]) {
			if (gameBoard[1][1] === 'X') {
				console.log('X wins on minor diagonal');
				winnerIs('X');
				return;
			} else if (gameBoard[1][1] === 'O') {
				console.log('O wins on minor diagonal');
				winnerIs('O');
				return;
			}
		}

	}		

	move++;
}

var winnerIs = function(winner) {
	document.body.innerHTML =`${winner} wins`
}