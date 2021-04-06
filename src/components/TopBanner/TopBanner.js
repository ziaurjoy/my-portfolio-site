

import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

export default class TopBanner extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className = "topTitle">SOFTWARE ENGINEER</h1>
                                    <h4 className="topSubTitle">Full Stack Web Developer</h4>
                                    <Button variant="primary">More</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </>
        )
    }
}
