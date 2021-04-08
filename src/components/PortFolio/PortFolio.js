import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

import ProjectImage from '../../asset/images/project.png'

export default class PortFolio extends Component {
    render() {
        return (
            <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectCard">
                                    <Card.Img variant="top" src={ProjectImage} />
                                    <Card.Body>
                                        <Card.Title  className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectCard">
                                    <Card.Img variant="top" src={ProjectImage} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectCard">
                                    <Card.Img variant="top" src={ProjectImage} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
        )
    }
}
