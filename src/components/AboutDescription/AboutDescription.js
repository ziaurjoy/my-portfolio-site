import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
export default class AboutDescription extends Component {
    render() {
        return (
            <>
               <Container>
                <Row className="aboutDescription">
                    <Col lg={12} md={12} sm={12}>
                        <h4>How I AM</h4><hr />
                        <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <h4>My Mission</h4><hr/>
                        <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>

                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <h4>My Vision</h4><hr/>
                        <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>

                    </Col>
                    </Row>
                </Container>
            
            </>
        )
    }
}
