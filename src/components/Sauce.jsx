import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Sauce extends PureComponent {

    render() {

        return (
            <div>
                <h2>Sauces!</h2>
                    <form>
                        <input type="radio" name="sauce" /><li>White sauce</li>
                        <input type="radio" name="sauce" /><li>Red sauce</li>
                        <input type="radio" name="sauce" /><li>Double red sauce € 1,00</li>
                        <input type="radio" name="sauce" /><li>Mix it up € 1,50 </li>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {

    }
}

export default connect(mapStateToProps)(Sauce)