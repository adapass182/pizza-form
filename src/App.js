// React + Redux stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Styling
import './App.css'

// Actions
import { addBase, removeBase } from './actions/base_a'

// Components
import Base from './components/Base'
import Sauce from './components/Sauce'
import Toppings from './components/Toppings'
import PizzaCart from './components/PizzaCart'


class App extends Component {

    handleChangeBase = () => {
        addBase()
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to NewAgePizza</h1>
                <Base />
                <Sauce />
                <Toppings />
                <PizzaCart />
            </div>
          );
      }
}

export default connect(null)(App);
