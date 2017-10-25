import React, {Component} from 'react'
import {Col, Row, Container} from 'reactstrap'
import './science.css'
import {connect} from 'react-redux'

class Scinece extends Component {
    render(){
        return(
            <section className="section-science">
                <Container>
                  <img src={this.props.verticlescience} alt="" className="science-vertical desktop ae4 "/>

                  <Row className="animatedRow">
                        <Col md="12" xs="12">
                            <img src={require("../../../img/celavive-pic-1.png")} alt="" className="celavive-pic-1 img-responsive lady-desktop"/>
                            <img src={require("../../../img/healthy-rect.png")} alt="" className="healthy-rect img-responsive lady-desktop" />
                            <img src={this.props.healthyquote} alt="" className="healthy-quote img-responsive lady-desktop"/>
                            <img src={this.props.healthymobile} alt="" className="lady-mobile  img-responsive"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = state => {
  return {
    verticlescience: state.changeit.verticlescience,
    healthymobile: state.changeit.healthymobile,
    healthyquote: state.changeit.healthyquote
  }
}

const withReduxConnect = connect(mapStateToProps)(Scinece)

export default withReduxConnect