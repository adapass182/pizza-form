import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Actions:
import { addSauce } from '../actions/sauce_a'

class Sauce extends PureComponent {

    handleChange = (event) => {
        this.props.addSauce(event.target.value)
    }

    render() {

        return (
            <div>
                <h2>Sauces!</h2>
                <div className="sauces">
                    <form>
                        <ul>
                        {this.props.sauces.map((sauce) => {
                            if (sauce.price === 0) {
                                return (<li key={sauce.id}>
                                    <label>
                                        <input 
                                        type="radio"
                                        name="sauce"
                                        value={sauce.price}
                                        onChange={this.handleChange}
                                        />
                                            {sauce.desc}
                                    </label>
                                </li>)
                            } else {
                                return (<li key={sauce.id}>
                                    <label>
                                        <input 
                                        type="radio"
                                        name="sauce"
                                        value={sauce.price}
                                        onChange={this.handleChange}
                                        />
                                            {sauce.desc} (+ €{sauce.price})
                                    </label>
                                </li>)
                            }
                            
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
        sauces: state.menu[1]
    }
}

export default connect(mapStateToProps, { addSauce })(Sauce)