import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Base extends PureComponent {

    render() {

        const bases = this.props.bases

        return (
            <div>
                <h2>Bases!</h2>
                <div name="bases">
                    <form>
                        {bases.map((base) => {
                            return (<ul><input type="radio" name="base" value={base.price} onClick={this.props.onClick}/><li key={base.id}>Size:{base.desc} Price:{base.price}</li></ul>)
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

export default connect(mapStateToProps)(Base)