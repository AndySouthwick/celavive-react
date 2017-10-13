import React, {Component} from 'react'
import { Container, Row, Col, Button} from 'reactstrap';
import {connect} from 'react-redux'
import store from '../../../store'
import founded from './founded.css'


class SectionFounder extends Component {
  constructor (){
    super()
    this.state = {
      readmoreclass: 'donotdisplay',
      readlessclass: 'displaytherest'

    }
  }

    componentWillMount () {
        const currentState = store.getState()
    }

  showreadmore = () => {
    this.setState({
      readmoreclass: 'displaytherest',
      readlessclass: 'donotdisplay'

    })
  }

    render() {

        let readmoreincell = this.props.founded
        let length = 140
        let incellstringless = readmoreincell.substring(0, length)

        return (
            <section className="section-founded-on-science">
                <Container>
                    <Row>
                        <Col md="12" sm="12" xs="12" className="left">
                            <img src={require("../../../img/bubbles-mobile.png")} className="ae7 bubbles-mobile " alt=""/>
                        </Col>
                        <Col md="12" className="bubbles-mobile">
                            <span className="fa-3x ae1 incelligence-header">{this.props.incellheader}</span>
                            <div className="celvCarouse">
                                <div className="celv-secondary-text">
                                    <p className={this.state.readmoreclass}>{readmoreincell}</p>
                                    <p className={this.state.readlessclass}>{incellstringless}</p>
                                    <Button onClick={this.showreadmore} className={this.state.readlessclass} >{this.props.readmore}</Button>

                                </div>
                            </div>
                        </Col>

                        <Col md="6" className="bubbles-desktop">
                            <img className="founded-on-science-img ae7" src={require("../../../img/founded-on-science-left.png")} alt=""/>
                        </Col>
                        <Col md="6" className="bubbles-desktop">
                            <span className="fa-3x ae1 incelligence-header">{this.props.incellheader}</span>
                            <div className="celvCarouse">
                                <div className="celv-secondary-text">
                                    <p className="paragraphtext ae1">{this.props.founded}</p>
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
        readmore: state.changeit.readmore,
        founded: state.founded,
        incellheader: state.incellheader

    }
}

const reduxConnect = connect(mapStateToProps)(SectionFounder)
export default reduxConnect