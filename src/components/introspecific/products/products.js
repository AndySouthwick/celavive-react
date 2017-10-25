import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import store from '../../../store'
import './products.css'
import { Link } from 'react-router-dom'

class SectionIntro extends Component {

    componentWillMount () {
        const currentState = store.getState()

    }

    render() {



        return (
            <section className="section-intro">
                <Container>
                    <Row className="intro-img">
                        <Col lg={{size:10}}>
                            <img src={require('../../../img/products1.png')} className="img-responsive ae3 product-line intro-desktop" alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size:9, offset:3}} md="12 addindex">
                            <div className="intro-header ae1">
                                <img src={require('../../../img/intro-mobile.png')} className="img-responsive ae1 intro-header-mobile mobile" alt="Introducing Advanced Skincare" />
                                <h1>{this.props.introheader}</h1>
                                        <p className="paragraphtext ae3">
                                            {this.props.intro}
                                        </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        introheader: state.introheader,
        intro: state.intro,
        img1: state.img1,
        img2: state.img2,
        language: state.language,
        page: state.page
    }
}

const reduxConnect = connect(mapStateToProps)(SectionIntro)

export default reduxConnect