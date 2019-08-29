var App = React.createClass({
  render: function() {
    return React.createElement('div', {className: 'app'},
      React.createElement(Counter1, {}),
      React.createElement(Counter2, {})
    )
  }
})

var Counter1 = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('div', {onClick: this.increment, className: 'plus'},
        React.createElement('img', {src: './icon/icon-plus.png'})
      ),
      React.createElement('div', {onClick: this.decrement, className: 'minus'},
        React.createElement('img', {src: './icon/icon-minus.png'})
      ),
      React.createElement('span', {}, 'Licznik ' + this.state.counter)
    );
  }
});

var Counter2 = React.createClass({
  getInitialState: function() {
    return {
      counter: 5
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('div', {onClick: this.increment, className: 'plus'},
        React.createElement('img', {src: './icon/icon-plus.png'})
      ),
      React.createElement('div', {onClick: this.decrement, className: 'minus'},
        React.createElement('img', {src: './icon/icon-minus.png'})
      ),
      React.createElement('span', {}, 'Licznik ' + this.state.counter)
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));
