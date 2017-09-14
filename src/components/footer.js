import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'


class CelaviveFooter extends Component {

    render(){



        return(
            <section id="section-footer">
              <Container>
                  <Row>
                      <Col  md="2" sm="12">
                          <img src={require('../img/usanalogo.svg')} alt="" className="img-responsive footer-logo"/>
                      </Col>

                  </Row>
                  <Row>
                  <Col>
                      <ul>
                          <li><span className="footerHeader">COMPANY</span></li>
                          <li><a href="https://www.usana.com/" target="_blank">USANA Home</a></li>
                          <li><a href="http://www.usanahealth.net/en_US.html" target="_blank">Products</a></li>
                          <li><a href="https://www.usana.com/dotCom/about/story" target="_blank">About USANA</a></li>
                          <li><a href="https://www.usana.com/dotCom/difference/science" target="_blank">Science</a></li>
                          <li><a href="http://chm.tbe.taleo.net/chm01/ats/careers/jobSearch.jsp?org=USANA&cws=1"
                                 target="_blank">Employment</a></li>
                          <li><a href="http://usana-ir.prod-mid-euw3.investis.com/" target="_blank">Investor Relations</a>
                          </li>
                      </ul>
                  </Col>
                      <Col >
                          <ul>
                              <li><span className="footerHeader">QUICK LINKS</span></li>
                              <li><a href="http://www.drwentz.com" target="_blank">Dr. Wentz</a></li>
                              <li><a href="https://askthescientists.com/">Ask the Scientists</a></li>
                              <li><a href="http://www.usanafoundation.org/">USANA True Health Foundation</a></li>
                              <li><a href="https://www.teamusana.com/">Team USANA</a></li>
                              <li><a href="http://www.usana-amp.com/">USANA Ampitheater</a></li>
                              <li><a href="https://whatsupusana.com/">“What’s Up USANA” Blog</a></li>
                          </ul>
                      </Col>
                        <Col >
                            <ul>
                                <li><span className="footerHeader">CONNECT</span></li>
                                <li><a href="https://www.usana.com/dotCom/contactUs?SET_LOCALE=en">Contact Us</a></li>
                                <li><a href="https://www.usana.com/hub">USANA Login</a></li>
                            </ul>
                            <ul className="iconList">
                                <li><span className="footerHeader">Follow USANA</span></li>
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
                              <small>* These statements have not been evaluated by the Food and Drug Administration. This product
                                  is not intended to diagnose, treat, cure or prevent any disease.
                              </small>
                          </div>
                          <div className="footer-text">
                              <small>USANA Health Sciences is known for manufacturing the highest quality products backed by a
                                  potency guarantee. To ensure you and your family are receiving genuine world-class USANA
                                  products, purchase them only through your independent USANA Associate or www.usana.com.
                              </small>
                          </div>
                      </Col>
                  </Row>

              </Container>
            </section>
        )
    }
}

export default CelaviveFooter