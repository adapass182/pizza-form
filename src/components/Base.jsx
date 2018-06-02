import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBase, removeBase } from '../actions/base_a'
import {bases} from '../pizzadata'

class Base extends PureComponent {

    render() {

        const handleChangeBase = () => {
            this.props.addBase()
        }

        return (
            <div>
                <h2>Bases!</h2>
                <div className="bases">
                {bases.map((base) => {
                    return (<li key={base.id}>Size:{base.desc} Price:{base.price}<input type="radio" name="bases" /></li>)
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { addBase, removeBase })(Base)