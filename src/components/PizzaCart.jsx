import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Actions:
import { addDrone, remDrone } from '../actions/drone_a'

class PizzaCart extends PureComponent {

    calculateTotal = (value) => {
        if (this.props.drone === 0) {
            value = value.reduce((a, b) => a + b, 0)
            return value.toFixed(2)
        }
        if (this.props.drone === 1){
            value = value.reduce((a, b) => a + b, 0) * 1.1
            return value.toFixed(2)
        }
    }

    handleChange = (event) => {
        if(event.target.checked) {
            return this.props.addDrone()
        }
        if(!event.target.check) {
            return this.props.remDrone()
        }
    }

    render() {

        return (
            <div>
                <h3>Want super fast drone-delivery with that?</h3>
                <form>
                    <label>
                        <input
                        type="checkbox"
                        name="dronedelivery"
                        onChange={this.handleChange}
                        />
                        Yes please! (+10% to total)
                    </label>
                </form>
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
        total: state.baseState
                .concat(state.sauceState)
                .concat(state.toppingState.reduce((a, b) => a + b, 0)),
        drone: state.droneState
    }
}

export default connect(mapStateToProps, { addDrone, remDrone })(PizzaCart)