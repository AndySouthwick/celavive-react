import React, {Component} from 'react'
import CaptureModal from '../modal'
import {Container, Row, Col} from 'reactstrap'
import './cta.css'
import CtaForm from './ctaform'

class CelaviveCta extends Component {

    render(){



        return(


<section  className="section-cta">

        <CaptureModal/>
         <CtaForm/>

</section>



        )
    }
}

export default CelaviveCta