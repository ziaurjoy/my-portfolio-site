import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default class TopPages extends Component {
    render() {
        return (
            <>
               <Container fluid={true} className="topPage p-0">
                    <div className="topPagerOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
    
                                    <h4 className="topPageSubTitle">{this.props.pageTitle}</h4>
                                   
                                </Col>
                               
                            </Row>
                        </Container>
                    </div>
                </Container> 
            </>
        )
    }
}
