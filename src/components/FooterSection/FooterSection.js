import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faYoutube } from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default class FooterSection extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="mt-5 text-center">
                    <Row className="footerCard">
                        <Col className="mt-5 text-justify" lg={3} md={6} sm={12}>
                            <h4>Follow Me</h4>
                            <a href="#" className="socialLink"><FontAwesomeIcon className="" icon={faFacebookF} /> Facebook</a><br/>
                            <a href="#" className="socialLink"><FontAwesomeIcon className="" icon={faYoutube} /> Youtube</a>
                        </Col>
                        <Col className="mt-5 text-justify" lg={3} md={6} sm={12}>
                            <h4>Address</h4>
                            <p>#3/17 Kallaynpur,Dhaka,Bangladesh</p>
                            <p><FontAwesomeIcon className="" icon={faEnvelope} /> ziaurjoy802@gmail.com</p>
                            <p><FontAwesomeIcon className="" icon={faPhone} /> 01771-833614</p>
                        </Col>
                        <Col className="mt-5 text-justify" lg={3} md={6} sm={12}>
                            <h4>Information</h4>
                            <Link to="/about" className="socialLink">About Me</Link><br/>
                            <Link to="/contact" className="socialLink">Contact</Link>
                        </Col>
                        <Col className="mt-5 text-justify" lg={3} md={6} sm={12}>
                            <h4>Legal</h4>
                            <Link className="socialLink" to="/refund">Refund Policy</Link><br/>
                            <a>Terms And Condition</a><br/>
                            <a>Privacy Policy</a>
                        </Col>
                    </Row>
                    </div>
                </Container>
                <div className="copyrightFooter">
                    <p className="copyrightFooterTitle">Ziaur Rahman Joy @ 21-22</p>
                </div>
            </>
        )
    }
}
