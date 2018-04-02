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
					console.log('O wins on row ', i)
				} else if (! gameBoard[i].includes('O')) {
					console.log('X wins on row ', i)
				}
			}
		}

		// check columns for winner
		// for (var i=0; i < 3; i++) {
		// 	if 
		// }

		// check diagonals for winner


	}

	move++;
}


		// for (var i=0; i < 3; i++) {
		// 	if (! gameBoard[i].includes('e')) {
		// 		if (! gameBoard[i].includes('X')) {
		// 			console.log('O wins!')
		// 		}
		// 	}
		// }