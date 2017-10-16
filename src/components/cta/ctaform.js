import React, {Component} from 'react'
import { Form,  Input, Button, Col, Row, Container } from 'reactstrap';
import {connect} from 'react-redux'

class CtaForm extends Component{

  render(){

    // let currentPageLink = []
    //
    // if(!this.props.page){
    //   currentPageLink= `/${this.props.language}/2/intro`
    // }
    //
    // if(this.props.page === '1'){
    //   currentPageLink= `/${this.props.language}/2/intro`
    //
    // }
    //
    // if(this.props.page === '2'){
    //   currentPageLink= `/${this.props.language}/2/intro`
    //
    // }
    return(

      <Form method="post" className="af-form-wrapper" acceptCharset="UTF-8"
            action="https://www.aweber.com/scripts/addlead.pl">
        <div>
          <Input type="hidden" name="meta_web_form_id" value="1556410765"/>
          <Input type="hidden" name="meta_split_id" value=""/>
          <Input type="hidden" name="listname" value="awlist4760667"/>
          <Input type="hidden" name="redirect" value="http://www.celavive.com/index2.html?v=success" id="redirect_ced42ebdd634e30dde702065546d7753" />
          <Input type="hidden" name="meta_adtracking" value="Celavive_Subscription_Form"/>
          <Input type="hidden" name="meta_message" value="1"/>
          <Input type="hidden" name="meta_required" value="email"/>
          <Input type="hidden" name="meta_tooltip" value=""/>
        </div>

        {/*<div className="cta-form">*/}
         {/*<span>{this.props.ctabutton}</span>*/}

                {/*<Input className="text" id="awf_field-92405287" type="text" name="email"*/}
                       {/*tabIndex="500" placeholder={this.props.modalformph}/>*/}

              {/*<Button name="submit" className="btn-circle" type="submit"*/}
                      {/*value="Submit" tabIndex="501">*/}
              {/*</Button>*/}
        {/*</div>*/}
        <Container>
              <Row>


                  <Col className="text-right" xs="12" md="6" lg="6">     <span>{this.props.ctabutton}</span>

                  </Col>

                  <Col>
                    <Row>
                      <Col xs={{size: 8}}  md="5" lg="5">   <Input className="text" id="awf_field-92405287" type="text" name="email"
                                     tabIndex="500" placeholder={this.props.modalformph}/>
                      </Col>
                      <Col xs={{size: 1, offset: 1}} md="1" lg="1">
                        <Button name="submit" className="btn-circle" type="submit"
                                value="Submit" tabIndex="501">

                        </Button>
                      </Col>


                    </Row>
                 </Col>

              </Row>
        </Container>

            {/*<div className="af-element privacyPolicy cta-form"> <p><a*/}
              {/*title="Privacy Policy" href="https://www.aweber.com/permission.htm" target="_blank"*/}
              {/*rel="nofollow">{this.props.modalprivacy}</a></p></div>*/}
           <img
          src="https://forms.aweber.com/form/displays.htm?id=jKysbCyMDOxsrA==" alt=""/>


      </Form>

    )
  }
}
const mapStateToProps = state => {
  return {
    ctabutton: state.ctabutton,
    modalformph: state.modalformph,
    modalformbtnsub: state.changeit.modalformbtnsub,
    modalformbtnnothanks: state.modalformbtnnothanks,
    language: state.language,
    modalprivacy: state.changeit.modalprivacy
  }
}

const reduxConnect = connect(mapStateToProps)(CtaForm)
export default reduxConnect