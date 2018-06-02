import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaCart extends PureComponent {

    calculateTotal = (x) => {
        return x.reduce((a, b) => a + b, 0)
    }

    render() {

        return (
            <div>
                <h2>Total spend!</h2>
                <p className="total">Total spend: {this.calculateTotal(this.props.total)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.pizzaState
    }
}

export default connect(mapStateToProps)(PizzaCart)