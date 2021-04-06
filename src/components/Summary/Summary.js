import React, { Component } from 'react'

import { Col, Container, Row, Card } from 'react-bootstrap'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor'

export default class Summary extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className="summaryFixedBanner p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col lg={8} md={6} sm={12} className="text-center">
                                    <Row>
                                        <Col>
                                            
                                            <h1 className="totalProjectTitle">

                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>
                                            <h4 className="totalProjectSubtitle">Total Project</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col>
                                            <h1 className="totalProjectTitle">
                                                <CountUp start={0} end={100}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                            </h1>
                                            <h4 className="totalProjectSubtitle">Total Project</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                
                                <Card style={{ width: '20rem', height: "11rem", margin:"auto"}}>
                                    <Card.Body>
                                        <Card.Title>How I Work</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-justify p-1"><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Requrement Gathering</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted text-justify p-1"><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> System Analaysis</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted text-justify p-1"><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Codeing Testing</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted text-justify p-1"><FontAwesomeIcon className="summaryIconColor" icon={faCheckCircle} /> Implemetation</Card.Subtitle>
                                    </Card.Body>
                                </Card>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </>
        )
    }
}
