import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Sauce extends PureComponent {

    render() {

        return (
            <p>Sauces!</p>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(Sauce)