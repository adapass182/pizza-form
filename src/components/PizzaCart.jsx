import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaCart extends PureComponent {

    calculateTotal = (value) => {
        value = value.reduce((a, b) => a + b, 0)
        return value.toFixed(2)
    }

    render() {

        return (
            <div>
                <h2>Total spend!</h2>
                <p className="total">Total spend: {this.calculateTotal(this.props.total)}</p>
                <h2>Your pizza:</h2>
                <p className="selection">List pizza choices here</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.pizzaState.concat(state.baseState).concat(state.sauceState).concat(state.toppingState.reduce((a, b) => a + b, 0))
    }
}

export default connect(mapStateToProps)(PizzaCart)