class App extends React.Component {

	constructor() {
		super();
		this.state = {
			board: [['white', 'white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white', 'white'], ['white', 'white', 'white', 'white', 'white', 'white', 'white']],
			player: 'blue'
		};
		this.drop = this.drop.bind(this);
	}

	drop(col) {
		var currBoard = this.state.board.slice();
		var placed = false;
		for (var i = 5; i >= 0; i--) {
			if (currBoard[i][col] === 'white' && placed === false) {
				currBoard[i][col] = this.state.player;
				placed = true;
			}
		}

		this.setState({
			board: currBoard
		});

		if (this.state.player === 'blue') {
			this.state.player = 'red';
		} else {
			this.state.player = 'blue';
		}
		// look through all rows in that column, starting at
		// for (var i=5; i >=0; i--) {
		// 	//
		// }			
	}

	render() {
		console.log('I was triggered during render');
		return React.createElement(
			'div',
			null,
			React.createElement(GameBoard, { board: this.state.board, drop: this.drop })
		);
	}
}

class GameBoard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var rows = [0, 1, 2, 3, 4, 5];

		return React.createElement(
			'div',
			null,
			React.createElement(
				'table',
				null,
				React.createElement(
					'tbody',
					null,
					rows.map((row, index) => React.createElement(Row, { x: row, key: index, board: this.props.board[row], drop: this.props.drop }))
				)
			)
		);
	}
}

class Row extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var cols = [0, 1, 2, 3, 4, 5, 6];

		return React.createElement(
			'tr',
			null,
			cols.map((col, index) => React.createElement(Square, { x: this.props.x, y: col, key: index, board: this.props.board[col], drop: this.props.drop }))
		);
	}
}

class Square extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement('td', { className: this.props.board, x: this.props.x, y: this.props.y, onClick: () => this.props.drop(this.props.y) });
	}
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));