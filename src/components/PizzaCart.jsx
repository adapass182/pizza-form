import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Actions:
import { addDrone, remDrone } from '../actions/drone_a'

//Syling:
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'

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
                <Subheader>
                    <h2>Want super fast drone-delivery with that?</h2>
                </Subheader>
                <Paper>
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
                </Paper>
                <Subheader>
                    <h2>Total spend: {this.calculateTotal(this.props.total)}</h2>
                </Subheader>
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