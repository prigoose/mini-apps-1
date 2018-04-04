

class App extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello, '
    );
  }
}

console.log(document);
console.log(document.body);
console.log(document.getElementById('app'));

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));