import React, {Component} from 'react'
import { Jumbotron, Button } from 'reactstrap';
import './hero.css'
import {connect} from 'react-redux'

class Hero extends Component{
  render(){
    return(
      <div>
        <Jumbotron className="producthero">
          <div className="herotext">
            <h1>CELAVIVE</h1>
            <p>____</p>
            <p>{this.props.herotext}</p>
          </div>
        </Jumbotron>
      </div>
    )
  }
}

//export default Hero
const mapStateToProps = state => {
  return {
    herotext: state.changeit.productstagline
  }
}

const reduxConnect = connect(mapStateToProps)(Hero)
export default reduxConnect
