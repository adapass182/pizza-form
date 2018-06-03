import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Actions:
import { addBase } from '../actions/base_a'
import { MuiThemeProvider } from 'material-ui/styles';

// Styles:
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List'

class Base extends PureComponent {


    handleChange = (event) => {
        this.props.addBase(event.target.value)
    }
      
    render() {

        return (
            <div>
                <Subheader>
                    <h2>Choose your base:</h2>
                </Subheader>
                <Paper>
                    <div className="bases">
                        <form>
                            <List>
                            {this.props.bases.map((base) => {
                                return (<li key={base.id}>
                                            <label>
                                                <input
                                                type="radio"
                                                name="base"
                                                value={base.price}
                                                onChange={this.handleChange}
                                                />
                                                    {base.desc} €{base.price}
                                            </label>
                                        </li>)
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
        bases: state.menu[0]
    }
}

export default connect(mapStateToProps, {addBase})(Base)