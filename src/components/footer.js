import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'


class CelaviveFooter extends Component {

    render(){



        return(
            <section id="section-footer">
              <Container>
                  <Row>
                      <Col  sm="12" className="text-center">
                          <img src={require('../img/usanalogo.svg')} alt="" className="img-responsive footer-logo"/>
                      </Col>

                  </Row>
                  <Row>
                  <Col sm="4">
                      <ul>
                          <li><span className="footerHeader">{this.props.company}</span></li>
                          <li><a href="https://www.usana.com/" target="_blank">{this.props.home}</a></li>
                          <li><a href="http://www.usanahealth.net/en_US.html" target="_blank">{this.props.products}</a></li>
                          <li><a href="https://www.usana.com/dotCom/about/story" target="_blank">{this.props.aboutusana}</a></li>
                          <li><a href="http://chm.tbe.taleo.net/chm01/ats/careers/jobSearch.jsp?org=USANA&cws=1"
                                 target="_blank">{this.props.employment}</a></li>
                          <li><a href="http://usana-ir.prod-mid-euw3.investis.com/" target="_blank">{this.props.investorrelations}</a>
                          </li>
                      </ul>
                  </Col>
                  <Col sm="4">
                          <ul>
                              <li><span className="footerHeader">{this.props.quicklinks}</span></li>
                              <li><a href="http://www.drwentz.com" target="_blank">{this.props.drwentz}</a></li>
                              <li><a href="https://askthescientists.com/">{this.props.askthescientists}</a></li>
                              <li><a href="http://www.usanafoundation.org/">{this.props.truehealth}</a></li>
                              <li><a href="https://www.teamusana.com/">{this.props.teamusana}</a></li>
                              <li><a href="http://www.usana-amp.com/">{this.props.amphitheatre}</a></li>
                              <li><a href="https://whatsupusana.com/">{this.props.whatsup}</a></li>
                          </ul>
                      </Col>
                  <Col sm="4">
                            <ul>
                                <li><span className="footerHeader">{this.props.connect}</span></li>
                                <li><a href="https://www.usana.com/dotCom/contactUs?SET_LOCALE=en">{this.props.contactus}</a></li>
                                <li><a href="https://www.usana.com/hub">{this.props.login}</a></li>
                            </ul>
                            <ul className="iconList">
                                <li><span className="footerHeader">{this.props.follow}</span></li>
                                <li className="icons">
                                    <a href="https://www.facebook.com/celavive" target="_blank"><i className="fa fa-2x fa-facebook"></i></a>
                                    <a href="https://twitter.com/celavive" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                                    <a href="https://www.instagram.com/celaviveofficial/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                                    <a href="https://www.pinterest.com/celavive/" target="_blank"><i className="fa fa-2x fa-pinterest-p"></i></a>
                                </li>
                            </ul>
                        </Col>
                  </Row>
                  <Row>
                      <Col xs="12">
                          <div className="footer-square-text">
                              <small>{this.props.fdadisc}
                              </small>
                          </div>
                          <div className="footer-text">
                              <small>{this.props.genuinepdisc}
                              </small>
                          </div>
                      </Col>
                  </Row>

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
