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

//Metody dot. stanu cyklu życia komponentu
  componentWillMount: function() {
    console.log('Metoda wykonywana przed metoda render, która zwraca potrzebny do wyświetlenia ReactElement');
  },

  componentDidMount: function() {
    console.log('Metoda wykonywana tuż po utworzeniu drzewa DOM, dzięki niej możemy wykonywać operacje na elementach drzewa DOM');
  },

//metody wykonywane po aktualizacji
  function() {
    console.log('shouldComponentUpdate Metoda sprawdza czy przerysowanie drzewa DOM jest potrzebne, zwraca wartość true lub false, dzięki niej możemy lepiej zoptymalizować naszą apke');
  },

//componentDidUpdate metoda wywoływana jeśli shouldComponentUpdate zwraca true, tutaj nie możemy modyfikować jej stanu

  componentDidUpdate: function () {
        console.log('wywoływana zaraz po przerysowania elementu DOM analogiczna do metody componentDidMount');
  },

  componentWillUnmount: function () {
        console.log('Metoda usuwa komponent');
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
