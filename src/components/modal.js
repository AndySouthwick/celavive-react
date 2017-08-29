import React, {Component} from 'react'
import { Button, Modal, ModalBody} from 'reactstrap';
import ModalForm from './modalform'
import { Redirect } from 'react-router-dom'

class CaptureModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            redirect: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleClose() {
        const redirect = true

        console.log('event fireds')

if(redirect) {
    return <Redirect to='/intro'/>;
}

    }

    render() {

        return (

            <div>
                <Button type="button" className="btn btn-primary btn-xl"  onClick={this.toggle}>SIGN UP FOR CELAVIVE UPDATES</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody className="text-center" >
                        <a href="/intro"><Button type="button" className="close modal-check" data-dismiss="modal"  onClick={this.toggleClose} aria-label="Close">
                            <i className="fa fa-times faCloseModal"></i>
                        </Button></a>


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

export default CaptureModal