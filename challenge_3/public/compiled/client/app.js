class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(GameBoard, null)
    );
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

    return React.createElement(
      'div',
      null,
      React.createElement(
        'table',
        null,
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 0, y: col, key: index }))
          ),
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 1, y: col, key: index }))
          ),
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 2, y: col, key: index }))
          ),
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 3, y: col, key: index }))
          ),
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 4, y: col, key: index }))
          ),
          React.createElement(
            'tr',
            null,
            cols.map((col, index) => React.createElement(Square, { x: 5, y: col, key: index }))
          )
        )
      )
    );
  }
}

class Square extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('td', { x: this.props.x, y: this.props.y });
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));