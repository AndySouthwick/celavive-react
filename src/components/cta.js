import React, {Component} from 'react'
import CaptureModal from './modal'
import {Container, Row, Col} from 'reactstrap'

class CelaviveCta extends Component {

    render(){



        return(



                    <Container fluid>
                    <Row>
                        <Col className="section-cta">
                            <div className="cta">
                            <CaptureModal/>
                            </div>
                        </Col>
                    </Row>
                    </Container>


        )
    }
}

export default CelaviveCta