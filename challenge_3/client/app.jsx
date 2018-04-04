class App extends React.Component {

	constructor() {
		super();
	}

  render() { 
  	return (
  		<div><GameBoard /></div>
		)
  }
}

class GameBoard extends React.Component {

	constructor() {
		super();
	}

	createCells() {
		// var rows = [0, 1, 2, 3, 4, 5];
		// for (var i=0; i < rows.length; i++) {
	}

  render() { 
  	var cols = [0, 1, 2, 3, 4, 5, 6];

  	return (
  		<div>
  			<table>
  				<tbody>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={0} y={col} key={index} />
							)}
  					</tr>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={1} y={col} key={index} />
							)}
  					</tr>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={2} y={col} key={index} />
							)}
  					</tr>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={3} y={col} key={index} />
							)}
  					</tr>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={4} y={col} key={index} />
							)}
  					</tr>
  					<tr>
  						{cols.map((col, index) => 
								<Square x={5} y={col} key={index} />
							)}
  					</tr>
  				</tbody>
				</table>
  		</div>
  	)
  }
}

class Square extends React.Component {

	constructor(props) {
		super(props);
	}

  render() { 
  	return (
	    <td x={this.props.x} y={this.props.y}></td>
	  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
