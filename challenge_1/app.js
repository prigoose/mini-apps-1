var move = 1;

var makeMove = function(el) {
	console.log('Congrats, youre in the makeMove function. FUCK YEAH');
	if (move % 2 !== 0) {
		// console.log('x')
	var space = document.getElementById(el.id);
	space.innerHTML += 'X';
	} else {
		// console.log('o')
		var space = document.getElementById(el.id);
		space.innerHTML += 'O'
	}
	move++;
}