import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import './cleanse.css'
import {connect} from 'react-redux'

class Cleanse extends Component{
  render(){
    return(
      <Container className="cleanse">
        <Row>
          <Col md="6" xs="12" className="goldtext"><h3>{this.props.drytitle}</h3></Col>
          <Col md="6" xs="12" className="goldtext"><h3>{this.props.combotitle}</h3></Col>
        </Row>
        <Row>
          <Col>
            <h2>{this.props.cleanse}</h2>
            Text about tone product here
          </Col>
        </Row>
        <Row>
          <Col md="4" xs="12">
            <img src={require('../../../img/conditioningmakeupremover.png')} alt=""/>
            <p>{this.props.makeupremover}</p>
          </Col>
          <Col md="4" xs="12">
            <img src={require('../../../img/creamyfoamcleanser.png')} alt=""/>
          <p>{this.props.creamyfoam}</p>
            <p><i>{this.props.combo}</i></p>
          </Col>
          <Col md="4" xs="12">
            <img src={require('../../../img/gentlemilkcleanser.png')} alt=""/>
            <p>{this.props.gentlemilk}</p>
            <i>{this.props.dry}</i>
          </Col>
        </Row>
        <hr/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cleanse: state.changeit.productscleanse,
  cleansetext: state.changeit.productstextcleanse,
  makeupremover: state.changeit.productsmakeupremove,
  creamyfoam: state.changeit.productscreamyfoam,
  gentlemilk: state.changeit.productsgentlemilk,
  drytitle: state.changeit.productsdryskin,
  combotitle: state.changeit.productscombooily,
  combo: state.changeit.productscomboitallic,
  dry: state.changeit.productsdrytallic
})

const withReduxConnect = connect(mapStateToProps)(Cleanse)
export default withReduxConnect