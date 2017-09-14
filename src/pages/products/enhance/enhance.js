import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'


class Enhance extends Component{
  render(){
    return(
      <Container className="tone">
        <Row>
          <Col>
            <h2>Enhance</h2>
            <i>Text about tone product here</i>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <img src={require('../../../img/hyddratingeyeessence.png')} alt=""/>
            <p>Hydrating Eye Essence</p>
          </Col>
          <Col xs="12" md="6">
            <img src={require('../../../img/vitalizingserum.png')} alt=""/>
            <p>Vitalizing Serum</p>
          </Col>
        </Row>
        <hr/>
      </Container>
    )
  }
}
export default Enhance