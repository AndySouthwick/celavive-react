import React, {Component} from 'react'
import './header.css'
import {connect} from 'react-redux'

class Hero extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner" data-color="#FFA500, #bada55, #4964A1">
                        <img src={this.props.chero2} alt=""
                             className="img-responsive productReveal" />
                    </div>
                </div>

            </header>
        )
    }
}

const mapStateToProps = state => ({
  chero2: state.changeit.chero2
})

const withReduxConnect = connect(mapStateToProps)(Hero)
export default withReduxConnect