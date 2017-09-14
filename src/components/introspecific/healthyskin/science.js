import React, {Component} from 'react'
import {Col, Row, Container} from 'reactstrap'
import './science.css'

class Scinece extends Component {
    render(){
        return(
            <section className="section-science">
                <Container>
                    <Row className="animatedRow">
                        <Col md="12" xs="12">
                            <img src={require("../../../img/celavive-pic-1.png")} alt="" className="celavive-pic-1 img-responsive desktop"/>
                            <img src={require("../../../img/healthy-rect.png")} alt="" className="healthy-rect img-responsive desktop"/>
                            <img src={require("../../../img/healthy-looking-skin.png")} alt="" className="healthy-quote img-responsive desktop"/>
                            <img src={require("../../../img/healthy-mobile.png")} alt="" className="mobile img-responsive"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default Scinece