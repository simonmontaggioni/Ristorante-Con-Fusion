import React, { Component } from 'react';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    return (
      <div className='App'>
        <Main />
      </div>
    );
  }
}

export default App;
