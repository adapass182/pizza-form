import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Toppings extends PureComponent {

    render() {

        return (
            <p>Toppings!</p>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(Toppings)