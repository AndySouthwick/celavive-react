import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import store from '../../../store'
import './intro.css'
import { Link } from 'react-router-dom'

class SectionIntro extends Component {

    componentWillMount () {
        const currentState = store.getState()

    }

    render() {



        return (
            <section className="section-intro">
                <div className="diagonal-bg"></div>
                <Container>
                    <Row>
                        <Col md="9">

                            <div className="intro-header ae1">

                                <img src={require('../../../img/intro-mobile.png')} className="img-responsive ae1 intro-header-mobile mobile" alt="Introducing Advanced Skincare" />
                                        <p className="paragraphtext ae3">
                                            <h1>{this.props.introheader}</h1>
                                            {this.props.intro}
                                        </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="intro-img">
                        <img src={require('../../../img/science-vertical.png')} alt="" className="science-vertical desktop ae4 "/>
                            <Col md={{size:10, offset: 2}}>
                                 <img src={require('../../../img/introducing-desktop.png')} className="img-responsive ae3 product-line intro-desktop" alt=""/>
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