import React, {Component} from 'react'
import { Button, Modal, ModalBody} from 'reactstrap';
import ModalForm from './modalform'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CaptureModal extends Component {
    constructor(props) {
        super(props);
       let eventfired = localStorage.getItem("eventfired")
        if (eventfired == 1) {
            this.state = {
                modal: false,
            }
        }else {
            this.state = {
                modal: false,
            };
            setTimeout(function() { this.setState({modal: true}); }.bind(this), 4000);
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
            this.setState({
                modal: !this.state.modal,
        })
        localStorage.setItem("eventfired", 1)
    }
    render() {

      let currentPageLink =  [];

      if(this.props.page === ''){
        currentPageLink= `/${this.props.language}/1/intro`

      }
      if(this.props.page === '1'){
        currentPageLink= `/${this.props.language}/1/intro`

      }
      if(this.props.page === '2'){
        currentPageLink= `/${this.props.language}/2/products`

      }

      return (
            <div>
                <Button type="button" className="btn btn-primary btn-xl"  onClick={this.toggle}>SIGN UP FOR CELAVIVE UPDATES</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody className="text-center" >
                        <Link to={currentPageLink}><Button type="button" className="close" data-dismiss="modal"  onClick={this.toggle} aria-label="Close">
                            <i className="fa fa-times faCloseModal"></i>
                        </Button></Link>
                        <h3 className="">Your first look at<br/>
                            the future of skincare!<br/>
                            Product available<br/>
                            <span className="date">FEBRUARY 2018</span>
                        </h3>
                        <h3 className="mb-0">Subscribe for updates</h3>
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
      page: state.page

    }
}

const reduxConnect = connect(mapStateToProps)(CaptureModal)
export default reduxConnect