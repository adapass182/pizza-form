import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBase, removeBase } from '../actions/base_a'

class Base extends PureComponent {

    render() {

        const handleChangeBase = () => {
            this.props.addBase()
        }

        return (
            <div>
                <h2>Bases!</h2>
                        <form>
                            <input type="radio" name="base" value='8.99' /><li>25cm NY Style € 8,99</li>
                            <input type="radio" name="base" /><li>30cm NY Style € 11,49</li>
                            <input type="radio" name="base" /><li>35cm NY Style € 13,49</li>
                            <input type="radio" name="base" /><li>20cm NY Style € 6,45</li>
                        </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps, { addBase, removeBase })(Base)