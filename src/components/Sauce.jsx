import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Actions:
import { addSauce } from '../actions/sauce_a'

// Styles:
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'

class Sauce extends PureComponent {

    handleChange = (event) => {
        this.props.addSauce(event.target.value)
    }

    render() {

        return (
            <div>
                <Subheader>
                    <h2>Now add some sauce:</h2>
                </Subheader>
                <Paper>
                    <div className="sauces">
                        <form>
                            <List>
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
                            </List>
                        </form>
                    </div>
                </Paper>
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