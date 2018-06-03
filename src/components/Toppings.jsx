import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Actions:
import { addTopping, removeTopping } from '../actions/topping_a'


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
            return this.props.removeTopping()
        }
    }

    render() {

        return (
            <div>
                <h2>Toppings!</h2>
                <h4>Choose up to three toppings, only 50cents each:</h4>
                <div className="toppings">
                    <form>
                        <ul>
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
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toppings: state.menu[2]
    }
  }

export default connect(mapStateToProps, { addTopping, removeTopping })(Toppings)