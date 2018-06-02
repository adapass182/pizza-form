// React + Redux stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Styling
import './App.css'

// Actions

// Components
import PizzaContainer from './container/PizzaContainer'
import PizzaCart from './components/PizzaCart'


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to NewAgePizza</h1>
                <PizzaContainer />
                <PizzaCart />
            </div>
          );
      }
}

export default connect(null)(App);
