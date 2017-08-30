import React, {Component} from 'react'
import { Container, Row, Col} from 'reactstrap';


class SectionIntro extends Component {

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
                                            Products that actively support beauty-preserving
                                            functions in your skin to defy visible signs of aging
                                            like photodamage, dryness, loss of firmness,
                                            discoloration, texture, and wrinkles to dramatically
                                            improve the look of your skin.
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

export default SectionIntro