import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Toppings extends PureComponent {

    render() {

        return (
            <div>
                <h2>Toppings!</h2>
                    <form>
                        <input type="checkbox" name="toppings" /><li>Pineapple</li>
                        <input type="checkbox" name="toppings"/><li>Corn</li>
                        <input type="checkbox" name="toppings"/><li>Red onion</li>
                        <input type="checkbox" name="toppings"/><li>Spinach</li>
                        <input type="checkbox" name="toppings"/><li>Cherry tomatoes</li>
                        <input type="checkbox" name="toppings"/><li>Chicken</li>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
  }

export default connect(mapStateToProps)(Toppings)