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
        <Row className="d-flex justify-content-center justify-content-around">
          <div className="d-flex flex-column align-text-bottom justify-content-end">
            <img src={require('../../../img/conditioningmakeupremover.png')} alt=""/>
            {this.props.makeupremover}
          </div>
        <div className="d-flex flex-column align-text-bottom justify-content-end">
          <img src={require('../../../img/creamyfoamcleanser.png')} alt=""/>
          {this.props.creamyfoam}
          <i>{this.props.combo}</i>
        </div>
        <div className="d-flex flex-column justify-content-end">
          <img src={require('../../../img/gentlemilkcleanser.png')} alt=""/>
          {this.props.gentlemilk}
          <i>{this.props.dry}</i>
        </div>
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