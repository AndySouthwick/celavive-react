import React, {Component} from 'react'
import { Container, Row, Col, Button} from 'reactstrap';
import store from '../../../store'
import {connect} from 'react-redux'
import './incell.css'
class FoundedOnScience extends Component {
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
  showreadless = () => {
    this.setState({
      readmoreclass: 'donotdisplay',
      readlessclass: 'displaytherest'
    })
  }
    render() {
        let sciencestring = this.props.science
        let length = 140
        let sciencestringless = sciencestring.substring(0, length)
      console.log(sciencestring)
      return (
            <section className="incelligence section-incelligence">
                <Container>
                    <Row className="greybg">
                      <Col lg="5" sm="12" xs="12">
                        <img src={require("../../../img/skin.png")} className="img-responsive floatimg hidden-xs hidden-sm hidden-md ae6 testube-desktop" alt=""/>
                      </Col>
                        <Col lg="7" sm="12" xs="12">
                            <img src={require('../../../img/skinmobile.png')} className="img-responsive visible-xs visible-sm ae1 testube-mobile" alt=""/>
                           <p> <span className="fa-3x ae1 incelligence-header foundedtexttreat">{ this.props.celavivefounded}</span>
                                    <div className="celv-secondary-text desktop tablet">
                                        <p className="paragraphtext ae1">{this.props.science}</p>
                                    </div>
                           </p>
                            <div className="celv-secondary-text mobile">
                                <p className="paragraphtext ae1">

                                  <p className={this.state.readmoreclass}>{sciencestring}</p>
                                  <p className={this.state.readlessclass}>{sciencestringless}</p>

                                  <Button onClick={this.showreadmore} className={this.state.readlessclass} > {this.props.readmore} <i className="fa fa-caret-down" aria-hidden="true"></i></Button>
                                  <Button onClick={this.showreadless} className={this.state.readmoreclass} >{this.props.readless} <i className="fa fa-caret-up" aria-hidden="true"></i></Button>
                                </p>
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
        celavivefounded: state.celavivefounded,
        science: state.science,
        readmore: state.changeit.readmore,
        readless: state.changeit.readless
    }
}

const reduxConnect = connect(mapStateToProps)(FoundedOnScience)
export default reduxConnect