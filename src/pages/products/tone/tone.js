import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import './tone.css'

class Tone extends Component{
  render(){
    return(
      <Container className="tone">
        <Row>
          <Col>
            <h2>Tone</h2>
            <i>Text about tone product here</i>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={require('../../../img/perfectingtoner.png')} alt=""/>
            <p>Perfecting Toner</p>
          </Col>
        </Row>
<hr/>
      </Container>
    )
  }
}
export default Tone