import React, {Component} from 'react'
import { Button, Modal, ModalBody} from 'reactstrap';
import ModalForm from './modalform'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

class CaptureModal extends Component {
    constructor(props) {
        super(props);
       let eventfired = localStorage.getItem("eventfired")
        if (eventfired == 1) {
            this.state = {
                modal: false,
                redirect: false
            }
        }else {
            this.state = {
                modal: false,
                redirect: false
            };
            setTimeout(function() { this.setState({modal: true}); }.bind(this), 4000);
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
            this.setState({
                modal: !this.state.modal,
                redirect: true
        })
        localStorage.setItem("eventfired", 1)
    }
    render() {

      const { redirect } = this.state;

      if (redirect) {
        return <Redirect to={`/${this.props.language}/2/intro`}/>;
      }


      let currentPageLink =  [];
      if(!this.props.page){
        currentPageLink= `/${this.props.language}/2/intro`
      }

      if(this.props.page === '1'){
        currentPageLink= `/${this.props.language}/2/intro`

      }
      if(this.props.page === '2'){
        currentPageLink= `/${this.props.language}/2/intro`

      }
      if(this.props.page === '3'){
        currentPageLink= `/${this.props.language}/3/products`

      }

      return (
            <div>







                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody className="text-center" >
                        <Link to={currentPageLink}><Button type="button" className="close" data-dismiss="modal"  onClick={this.toggle} aria-label="Close">
                            <i className="fa fa-times faCloseModal"></i>
                        </Button></Link><br/>
                        <h3  dangerouslySetInnerHTML={ {__html: this.props.modalheader}} />
                      <h3> <span className="date">{this.props.modalearly}</span></h3>
                        <h3 className="mb-0">{this.props.modalsub}</h3>
                            <ModalForm/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      language: state.language,
      page: state.page,
      ctabutton: state.ctabutton,
      modalheader: state.modalheader,
      modalearly: state.modalearly,
      modalsub: state.modalsub
    }
}

const reduxConnect = connect(mapStateToProps)(CaptureModal)
export default reduxConnect