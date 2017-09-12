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
            <div className="left col-xs-2 col-md-2">
              <img src={require('../../img/follow-us.svg')} alt="" className="ae10"/>
            </div>
            <div className="right col-xs-10 col-md-10">
              <div className="row top ae11">
                <Col xs="4"><a href="https://www.facebook.com/celavive" target="_blank"><img src={require("../../img/shareable1.png")} alt="" className="ae1"/></a></Col>
                <Col xs="4"><img src={require("../../img/shareable2.png")} alt="" className="ae2"/></Col>
                <Col xs="4"><a href="https://www.instagram.com/celaviveofficial/" target="_blank"><img src={require("../../img/shareable3.png")} alt="" className="ae3"/></a></Col>
              </div>
              <div className="clearfix bottom celv-secondary-text ae12">
                <div><img className="title" src={require("../../img/USANAcelavive.png")} alt=""/></div>
                <div className="content">Learn about individuals who live healthy lifestyles that go beyond supplementation.</div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    celavivefounded: state.celavivefounded,
    science: state.science
  }
}

const reduxConnect = connect(mapStateToProps)(SectionSocial)
export default reduxConnect