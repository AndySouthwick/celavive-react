import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'


class Hydrate extends Component{
  render(){
    return(
      <Container className="tone">
        <Row>
          <Col>
            <h2>{this.props.hydrate}</h2>
            <i>{this.props.hydratetext}</i>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="3">
            <img src={require('../../../img/protectivedaylotion.png')} alt=""/>
            <p>{this.props.prodaylo}</p>
            <i>{this.props.combo}</i>
          </Col>
          <Col xs="12" md="3">
          <img src={require('../../../img/protectivedaycream.png')} alt=""/>
          <p>{this.props.prodaycream}</p>
            <i>{this.props.dry}</i>
        </Col>
          <Col xs="12" md="3">
            <img src={require('../../../img/replenishingnightgel.png')} alt=""/>
            <p>{this.props.repnightgel}</p>
            <i>{this.props.combo}</i>
          </Col>
          <Col xs="12" md="3">
            <img src={require('../../../img/replenishingnightcream.png')} alt=""/>
            <p>{this.props.repnightcream}</p>
            <i>{this.props.dry}</i>
          </Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  hydrate: state.changeit.productshydrate,
  hydratetext: state.changeit.productstexthydrate,
  prodaylo: state.changeit.productsprodaylotion,
  dry: state.changeit.productsdrytallic,
  combo: state.changeit.productscomboitallic,
  prodaycream: state.changeit.productsprodaycream,
  repnightgel: state.changeit.productsrepnightgel,
  repnightcream: state.changeit.productsrepnightcream
})

const withReduxConnect = connect(mapStateToProps)(Hydrate)

export default withReduxConnect