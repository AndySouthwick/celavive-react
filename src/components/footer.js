import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'


class CelaviveFooter extends Component {

    render(){



        return(
            <section id="section-footer" >
              <Container >

                    <Col xs="12" lg="12">
                      <img src={require('../img/usanalogo.svg')} alt="" className="img-responsive footer-logo"/>

                  {/*<Col xs="12" lg={{size: 2, offset: 1}}>*/}
                    {/*<a href="http://www.usanahealth.net/en_US.html" target="_blank">{this.props.products}</a>*/}
                  {/*</Col>*/}
                    {/*<Col xs="12" lg="2">*/}
                      {/*<a href="https://askthescientists.com/">{this.props.askthescientists}</a>*/}
                    {/*</Col>*/}
                  {/*<Col xs="12" lg="2">*/}
                      {/*<a href="https://whatsupusana.com/">{this.props.whatsup}</a>*/}
                  {/*</Col>*/}

                  {/*</Row>*/}


                    <ul className="iconList">
                      <li className="icons">
                        <a href="https://www.facebook.com/celavive" target="_blank"><i className="fa fa-2x fa-facebook"></i></a>
                        <a href="https://twitter.com/celavive" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com/celaviveofficial/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                        <a href="https://www.pinterest.com/celavive/" target="_blank"><i className="fa fa-2x fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </Col>

              </Container>
            </section>
        )
    }
}

const mapStateToProps = state => ({
  company: state.changeit.company,
  home: state.changeit.home,
  products: state.changeit.products,
  aboutusana: state.changeit.aboutusana,
  footerscience: state.changeit.footerscience,
  employment: state.changeit.employment,
  investorrelations: state.changeit.investorrelations,
  quicklinks: state.changeit.quicklinks,
  drwentz: state.changeit.drwentz,
  askthescientists: state.changeit.askthescientists,
  truehealth: state.changeit.truehealth,
  teamusana: state.changeit.teamusana,
  amphitheatre: state.changeit.amphitheatre,
  whatsup: state.changeit.whatsup,
  connect: state.changeit.connect,
  contactus: state.changeit.contactus,
  login: state.changeit.login,
  follow: state.changeit.follow,
  fdadisc: state.changeit.fdadisc,
  genuinepdisc: state.changeit.genuinepdisc,





})

const withReduxConnect = connect(mapStateToProps)(CelaviveFooter)

export default withReduxConnect
