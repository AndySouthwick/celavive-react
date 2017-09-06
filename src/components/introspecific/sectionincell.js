import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import store from '../../store'
import {connect} from 'react-redux'

class SectionIncell extends Component {
    componentWillMount () {
        const currentState = store.getState()
    }

    render() {
        return (
            <section className="incelligence section-incelligence">
                <Container>
                    <Row className="greybg">
                        <Col lg="6">
                            <img src={require('../../img/testubeladymob.png')} className="img-responsive visible-xs visible-sm ae1" alt=""/>
                                <img src={require('../../img/founded-bauer.png')} className="img-responsive founded ae1" alt=""/>
                                    <div className="celv-secondary-text">
                                        <p className="paragraphtext ae1">{this.props.science}</p>
                                    </div>
                        </Col>
                        <Col lg="6">
                            <img  src={require("../../img/Test-Tube-Lady.png")} className="img-responsive floatimg hidden-xs hidden-sm hidden-md ae6" alt=""/>

                        </Col>
                    </Row>
                </Container>

            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        science: state.science
    }
}

const reduxConnect = connect(mapStateToProps)(SectionIncell)
export default reduxConnect