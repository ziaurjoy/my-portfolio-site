import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CourseImage from '../../asset/images/course.jpg'

export default class Courses extends Component {
    render() {
        return (
            <>
            <Container>
                <h1 className='serviceMainTitle text-center'>Courses</h1>
                <Row>
                    <Col lg={6} md={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img style={{width: "100%"}} src={CourseImage} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="courseTitle">Web Development</h5>
                                <p className="courseDescription">Want to build your website or app using the most up-to-date web development capabilities?</p>
                                <a href="#">Details</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img style={{width: "100%"}} src={CourseImage} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className="courseTitle">Web Development</h3>
                                <p className="courseDescription">Want to build your website or app using the most up-to-date web development capabilities?</p>
                                <a href="#">Details</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img style={{width: "100%"}} src={CourseImage} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className="courseTitle">Web Development</h3>
                                <p className="courseDescription">Want to build your website or app using the most up-to-date web development capabilities?</p>
                                <a href="#">Details</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img style={{width: "100%"}} src={CourseImage} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className="courseTitle">Web Development</h3>
                                <p className="courseDescription">Want to build your website or app using the most up-to-date web development capabilities?</p>
                                <a href="#">Details</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
                
            </>
        )
    }
}
