import React, { Component } from 'react'
import { Col, Container, Row, Form,Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <h4>Quick Connect</h4>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <Form>
                        <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </Col>
                        <Col className="mt-4" lg={6} md={6} sm={12}>
                            <h4>Discus Now</h4>
                            <p>#3/17 Kallaynpur,Dhaka,Bangladesh</p>
                            <p><FontAwesomeIcon className="" icon={faEnvelope} /> ziaurjoy802@gmail.com</p>
                            <p><FontAwesomeIcon className="" icon={faPhone} /> 01771-833614</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
