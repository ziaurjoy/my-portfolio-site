import React, { Component } from 'react'
import { Col, Row,Button,Container } from 'react-bootstrap'

import ProjectImage from '../../asset/images/project.png'

export default class ProjectDetails extends Component {
    render() {
        return (
            <>
            <Container className="mt-5">
                <Row>
                    <Col lsg={6} md={6} sm={12}>
                        <img className="projectDetailsImage" src={ProjectImage} />
                    </Col>
                    <Col lsg={6} md={6} sm={12}>
                        <h3 className="serviceMainTitle">Foll Bazar</h3>
                        <p className="serviceDescription">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        <ul>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                            <li className="serviceDescription">Unlimited Dynamic Category</li>
                        </ul>
                        <Button variant="primary">Live View</Button>
                    </Col>
                </Row>
                </Container>
            </>
        )
    }
}
