import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaCart extends PureComponent {

    render() {

        return (
            <p>Total spend!</p>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(PizzaCart)