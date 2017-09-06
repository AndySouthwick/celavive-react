import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';
import {languages} from '../../languages/languages';
import {connect} from 'react-redux'
import store from '../../store'

class SectionIntro extends Component {

    componentWillMount () {
        const currentState = store.getState()
    }

    render() {
        return (
            <section className="section-intro">
                <Container>
                    <Row>
                        <Col md="9">
                            <div className="intro-header ae1">
                                <img src={require('../../img/intro-mobile.png')} className="img-responsive ae1 visible-xs visible-sm intro-header-mobile" alt="Introducing Advanced Skincare" />
                                    <img src={require('../../img/intro-header.png')} className="img-responsive ae2 intro-header-text" alt="Introducing Advanced Skincare" />

                                        <p className="paragraphtext ae3">
                                            {this.props.intro}
                                        </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="intro-img hidden-xs hidden-sm">
                        <img src={require('../../img/science-vertical.png')} alt="" className="science-vertical img-responsive hidden-sm hidden-xs ae4"/>
                            <Col md={{size:10, offset: 2}}>
                                <img src={require('../../img/introducing-desktop.png')} className="img-responsive ae3 product-line" alt=""/>
                            </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        intro: state.intro
    }
}

const reduxConnect = connect(mapStateToProps)(SectionIntro)

export default reduxConnect