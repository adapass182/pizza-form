import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Actions:
import { addBase, removeBase } from '../actions/base_a'

class Base extends PureComponent {

    handleChange = (event) => {
        console.log(event.target.value)
        this.props.addBase(event.target.value)
      }
      
    render() {

        const bases = this.props.bases

        return (
            <div>
                <h2>Bases!</h2>
                <div name="bases">
                    <form>
                        {bases.map((base) => {
                            return (<ul><li key={base.id}><label><input type="radio" name="base" value={base.price} onChange={this.handleChange}/>Size:{base.desc} Price:{base.price}</label></li></ul>)
                        })}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bases: state.menu[0]
    }
}

export default connect(mapStateToProps, {addBase, removeBase})(Base)