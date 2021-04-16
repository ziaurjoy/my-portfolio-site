import React, { Component } from 'react'
import { Col, Container, Row, Modal, Button, Card } from 'react-bootstrap'


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

import "video-react/dist/video-react.css"; // import css
import { Player,BigPlayButton } from 'video-react';

export default class CourseDetails extends Component {

    constructor(){
        super()
        this.state = {
            show: false
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <>
                
                <Container fluid={true} className="topPage p-0">
                    <div className="topPagerOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col style={{color:"whitesmoke"}} lg={6} md={6} sm={12} className="text-justify courseDescription">
                                    <h4>Full Dynamic Website With Admin Panel</h4>
                                    <p>Total Class = 40</p>
                                    <p>Total Student = 40</p> 
                                </Col>
                                <Col>
                                    <p style={{color:"whitesmoke"}}  lg={6} md={6} sm={12} className="text-justify courseDescription">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                                </Col>
                               
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h3>Skill You Get</h3>
                            <ul>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                                <li><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Unlimited Product Category</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={6} sm={12}>

                        <Card className="text-center pb-5">
                            <Card.Body>
                                <FontAwesomeIcon className="vedioFontAwasam" onClick={this.handleShow} icon={faPlayCircle} />
                            </Card.Body>
                        </Card>

                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                            
                            <Player>
                                <source  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                         
                        </Modal>

                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
