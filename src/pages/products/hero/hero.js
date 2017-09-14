import React, {Component} from 'react'
import { Jumbotron, Button } from 'reactstrap';
import './hero.css'

class Hero extends Component{
  render(){
    return(
      <div>
        <Jumbotron className="producthero">
          <div className="herotext">
            <h1>CELAVIVE</h1>
            <p>____</p>
            <p>A comprehensive line of high-performance skincare products will be available early 2018. Check with your local markets representatives for more details.</p>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
export default Hero