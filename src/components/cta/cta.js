import React, {Component} from 'react'
import CaptureModal from '../modal'
import {Container, Row, Col} from 'reactstrap'
import './cta.css'
import CtaForm from './ctaform'

class CelaviveCta extends Component {

    render(){



        return(


<section  className="section-cta">
  <Container fluid className="ctatablecel">
    <Row>
      <Col xs="12">
        <CaptureModal/>
        <CtaForm/>
      </Col>
    </Row>
  </Container>
</section>



        )
    }
}

export default CelaviveCta