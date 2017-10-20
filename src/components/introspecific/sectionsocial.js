import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import store from '../../store'
import {connect} from 'react-redux'

class SectionSocial extends Component {
  componentWillMount () {
    const currentState = store.getState()
  }

  render() {
    return (
      <section className="section-social-media">
        <Container>
          <Row className=" flexRow">
            <Col xs="2" md="2" className="left">
              <img src={this.props.verticlefollow} alt="" className="ae10"/>
            </Col>
            <Col xs="10" md="10" className="right">
              <Row className="top ae11">
                <Col xs="4"><a href="https://www.facebook.com/celavive" target="_blank"><img src={require("../../img/shareable1.png")} alt="" className="ae1"/></a></Col>
                <Col xs="4"><img src={this.props.standard} alt="" className="ae2"/></Col>
                <Col xs="4"><a href="https://www.instagram.com/celaviveofficial/" target="_blank"><img src={require("../../img/shareable3.png")} alt="" className="ae3"/></a></Col>
              </Row>
              <div className="clearfix bottom celv-secondary-text ae12">
                <div><img className="title" src={require("../../img/USANAcelavive.png")} alt=""/></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    verticlefollow: state.changeit.verticlefollow,
    celavivefounded: state.celavivefounded,
    science: state.science,
    standard: state.changeit.standard
  }
}

const reduxConnect = connect(mapStateToProps)(SectionSocial)
export default reduxConnect