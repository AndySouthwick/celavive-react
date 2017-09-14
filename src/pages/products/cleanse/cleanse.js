import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import './cleanse.css'

class Cleanse extends Component{
  render(){
    return(
      <Container className="cleanse">
        <Row>
          <Col md="6" xs="12" className="goldtext"><h3>DRY + SENSITIVE SKIN</h3></Col>
          <Col md="6" xs="12" className="goldtext"><h3>COMBINATION + OILY SKIN</h3></Col>
        </Row>
        <Row>
          <Col>
            <h2>Cleanse</h2>
            Text about tone product here
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <img src={require('../../../img/conditioningmakeupremover.png')} alt=""/>
            <p>Conditioning Makeup Remover</p>
          </Col>
          <Col md="4">
            <img src={require('../../../img/creamyfoamcleanser.png')} alt=""/>
          <p>Creamy Foam Cleanser</p>
            <p><i>combination/oily skin</i></p>
          </Col>
          <Col md="4">
            <img src={require('../../../img/gentlemilkcleanser.png')} alt=""/>
            <p>Gentle Milk Cleanser</p>
            <i>dry/sensitive skin</i>
          </Col>
        </Row>
        <hr/>
      </Container>
    )
  }
}
export default Cleanse