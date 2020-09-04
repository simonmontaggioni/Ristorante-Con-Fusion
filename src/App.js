import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
