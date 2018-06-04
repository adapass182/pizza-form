// React + Redux stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from 'material-ui/AppBar'
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto'

// Components
import Base from './components/Base'
import Sauce from './components/Sauce'
import Toppings from './components/Toppings'
import PizzaCart from './components/PizzaCart'

const muiTheme = getMuiTheme(lightBaseTheme)

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <CssBaseline />
                    <div className="App">
                    <AppBar iconElementLeft={(<div />)}>
                        <h1 className="App-title">...welcome to NewAgePizza</h1>
                    </AppBar>
                    <Base />
                    <Sauce />
                    <Toppings />
                    <PizzaCart />
                </div>
            </MuiThemeProvider>
          );
      }
}

export default connect(null)(App);
