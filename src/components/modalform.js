import React, {Component} from 'react'
import {  Form, Input, Label } from 'reactstrap';
import {connect} from 'react-redux'


class ModalForm extends Component{

  toggle = () => {
    localStorage.setItem("eventfired", 1)
  }

    render(){

     let currentPageLink = []

      if(!this.props.page){
        currentPageLink= `/${this.props.language}/2/intro`
      }

      if(this.props.page === '1'){
        currentPageLink= `/${this.props.language}/2/intro`

      }

      if(this.props.page === '2'){
        currentPageLink= `/${this.props.language}/2/intro`

      }
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
                <div id="af-form-1556410765" className="af-form">
                    <div id="af-body-1556410765" className="af-body af-standards">
                        <div className="af-element">
                            <Label className="previewLabel" for="awf_field-92405287"></Label>
                            <div className="af-textWrap">
                                <Input className="text" id="awf_field-92405287" type="text" name="email"
                                       tabIndex="500" placeholder={this.props.modalformph}/>
                            </div>
                            <div className="af-clear"></div>
                        </div>
                        <div className="af-element buttonContainer">
                            <button name="submit" className="btn btn-primary btn-lg btn-block" type="submit"
                                    value="Submit" tabIndex="501">{this.props.modalformbtnsub}
                            </button>

                            <a href={currentPageLink}> <button  onClick={this.toggle} name="cancel" className="btn btn-primary-invert btn-lg btn-block modal-check" type="button"
                                                     data-dismiss="modal" value="cancel" tabIndex="501">{this.props.modalformbtnnothanks}
                            </button></a>
                            <div className="af-clear"></div>
                        </div>
                        <div className="af-element privacyPolicy"> <p><a
                            title="Privacy Policy" href="https://www.aweber.com/permission.htm"
                            rel="nofollow">{this.props.modalprivacy}</a></p>
                            <div className="af-clear"></div>
                        </div>
                    </div>
                </div>
                <div><img
                    src="https://forms.aweber.com/form/displays.htm?id=jKysbCyMDOxsrA==" alt=""/></div>
            </Form>
        )
    }
}
const mapStateToProps = state => {
  return {
    modalformph: state.modalformph,
    modalformbtnsub: state.changeit.modalformbtnsub,
    modalformbtnnothanks: state.modalformbtnnothanks,
    language: state.language,
    modalprivacy: state.changeit.modalprivacy
  }
}

const reduxConnect = connect(mapStateToProps)(ModalForm)
export default reduxConnect