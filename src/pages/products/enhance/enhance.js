import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'


class Enhance extends Component{
  render(){
    return(
      <Container className="tone">
        <Row>
          <Col>
            <h2>{this.props.enhance}</h2>
            <i>{this.props.enhancetext}</i>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <img src={require('../../../img/hyddratingeyeessence.png')} alt=""/>
            <p>{this.props.hydeyeess}</p>
          </Col>
          <Col xs="12" md="6">
            <img src={require('../../../img/vitalizingserum.png')} alt=""/>
            <p>{this.props.vitalserum}</p>
          </Col>
        </Row>
        <hr/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  enhance: state.changeit.productsenhance,
  enhancetext: state.changeit.productstextenhance,
  hydeyeess: state.changeit.productshydeyeesence,
  vitalserum: state.changeit.productsvitalizingserum

})

const withReduxConnect = connect(mapStateToProps)(Enhance)
export default withReduxConnect