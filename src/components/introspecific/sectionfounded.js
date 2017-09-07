import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import store from '../../store'


class SectionFounder extends Component {

    componentWillMount () {
        const currentState = store.getState()
    }

    render() {
        return (
            <section className="section-founded-on-science">
                <Container>
                    <Row>
                        <Col md="5" className="left">
                            <img className="founded-on-science-img ae7 hidden-sm hidden-xs" src={require("../../img/founded-on-science-left.png")} alt=""/>
                                <img src={require("../../img/bubbles-mobile.png")} className="ae7 visible-xs visible-sm" alt=""/>
                        </Col>
                        <Col md="6">
                            <span className="fa-3x ae1 incelligence-header">INCELLIGENCE</span>
                            <div className="celvCarouse">
                                <div className="celv-secondary-text">
                                    <p className="paragraphtext ae1">{this.props.founded} </p>
                                </div>
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
        founded: state.founded

    }
}

const reduxConnect = connect(mapStateToProps)(SectionFounder)
export default reduxConnect