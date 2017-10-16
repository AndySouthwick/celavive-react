import React, {Component} from 'react'
import { Container, Row, Col, Button} from 'reactstrap';
import store from '../../../store'
import {connect} from 'react-redux'
import './incell.css'
import ExpandText from 'react-expand-text';

class SectionIncell extends Component {
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
                        <Col lg="6" sm="12" xs="12">
                            <img src={require('../../../img/testubeladymob.png')} className="img-responsive visible-xs visible-sm ae1 testube-mobile" alt=""/>
                           <p> <h1>{ this.props.celavivefounded}</h1>
                                    <div className="celv-secondary-text desktop tablet">
                                        <p className="paragraphtext ae1">{this.props.science}</p>
                                    </div>
                           </p>
                            <div className="celv-secondary-text mobile">
                                <p className="paragraphtext ae1">

                                  <p className={this.state.readmoreclass}>{sciencestring}</p>
                                  <p className={this.state.readlessclass}>{sciencestringless}</p>

                                  <Button onClick={this.showreadmore} className={this.state.readlessclass} > {this.props.readmore}</Button>
                                  <Button onClick={this.showreadless} className={this.state.readmoreclass} ><i className="fa fa-caret-up" aria-hidden="true"></i></Button>


                                </p>
                            </div>
                        </Col>
                        <Col lg="6" sm="12" xs="12">
                            <img src={require("../../../img/Test-Tube-Lady.png")} className="img-responsive floatimg hidden-xs hidden-sm hidden-md ae6 testube-desktop" alt=""/>

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
        readmore: state.changeit.readmore
    }
}

const reduxConnect = connect(mapStateToProps)(SectionIncell)
export default reduxConnect