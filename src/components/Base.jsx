import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Actions:
import { addBase } from '../actions/base_a'

class Base extends PureComponent {


    handleChange = (event) => {
        this.props.addBase(event.target.value)
      }
      
    render() {

        return (
            <div>
                <h2>Bases!</h2>
                <div className="bases">
                    <form>
                        <ul>
                        {this.props.bases.map((base) => {
                            return (<li key={base.id}>
                                        <label>
                                            <input
                                            type="radio"
                                            name="base"
                                            value={base.price}
                                            onChange={this.handleChange}
                                            />
                                                Size:{base.desc}
                                                Price:{base.price}
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
        bases: state.menu[0]
    }
}

export default connect(mapStateToProps, {addBase})(Base)