import React, { Component } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import WebImage from '../../asset/images/web.svg'
import MobileImage from '../../asset/images/mobile.svg'
import GraphicImage from '../../asset/images/graphics.svg'

export default class Service extends Component {
    render() {
        return (
            <>
            <Container>
                <h1 className="serviceMainTitle text-center">My Service</h1>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={WebImage} />
                            <h2 className = "serviceName">Web Application</h2>
                            <p className="serviceDescription text-center">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={MobileImage} />
                            <h2 className = "serviceName">Mobile Application</h2>
                            <p className="serviceDescription text-center">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={GraphicImage} />
                            <h2 className = "serviceName">Graphics Design</h2>
                            <p className="serviceDescription text-center">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
                
            </>
        )
    }
}
