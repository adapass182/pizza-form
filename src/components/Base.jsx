import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Base extends PureComponent {

    render() {

        return (
            <p>Bases!</p>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(Base)