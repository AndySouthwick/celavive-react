import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'


class Hydrate extends Component{
  render(){
    return(
      <Container className="tone">
        <Row>
          <Col>
            <h2>Hydrate</h2>
            <i>Text about tone product here</i>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="3">
            <img src={require('../../../img/protectivedaylotion.png')} alt=""/>
            <p>Protective Day Lotion</p>
            <i>combination/oily skin</i>
          </Col>
          <Col xs="12" md="3">
          <img src={require('../../../img/protectivedaycream.png')} alt=""/>
          <p>Protective Day Cream</p>
            <i>dry/sensitive skin</i>
        </Col>
          <Col xs="12" md="3">
            <img src={require('../../../img/replenishingnightgel.png')} alt=""/>
            <p>Replenishing Night Gel</p>
            <i>combination/oily skin</i>
          </Col>
          <Col xs="12" md="3">
            <img src={require('../../../img/replenishingnightcream.png')} alt=""/>
            <p>Replenishing Night Cream</p>
            <i>dry/sensitive skin</i>
          </Col>
        </Row>

      </Container>
    )
  }
}
export default Hydrate