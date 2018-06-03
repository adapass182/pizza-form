import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Actions:
import { addTopping, remTopping } from '../actions/topping_a'

// Styles:
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'


class Toppings extends PureComponent {

    toppingCount = 0

    handleChange = (event) => {
        if (event.target.checked && this.toppingCount < 3) {
            ++this.toppingCount
            return this.props.addTopping(event.target.value)
        } 
        if (event.target.checked && this.toppingCount === 3) {
            window.alert("Maximum of three toppings please")
            return event.target.checked = false
        }
        if (!event.target.checked && this.toppingCount <= 3) {
            --this.toppingCount
            return this.props.remTopping()
        }
    }

    render() {

        return (
            <div>
                <Subheader>
                    <h2>Get some toppings:</h2>
                    <h4>Choose up to three toppings at only €.50 each!</h4>
                </Subheader>
                <Paper>
                    <div className="toppings">
                        <form>
                            <List>
                            {this.props.toppings.map((topping) => {
                                return (<li key={topping.id}>
                                            <label>
                                                <input 
                                                type="checkbox"
                                                name={topping.desc}
                                                value={topping.price}
                                                onChange={this.handleChange}
                                                />
                                                    {topping.desc}
                                            </label>
                                        </li>)
                            })}
                            </List>
                        </form>
                    </div>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toppings: state.menu[2]
    }
  }

export default connect(mapStateToProps, { addTopping, remTopping })(Toppings)