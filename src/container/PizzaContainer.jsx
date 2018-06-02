import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Components
import Base from '../components/Base'
import Sauce from '../components/Sauce'
import Toppings from '../components/Toppings'

class PizzaContainer extends PureComponent {

    render() {
        return (
            <div>
                <Base />
                <Sauce />
                <Toppings />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(PizzaContainer)