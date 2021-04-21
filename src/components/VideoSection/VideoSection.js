import React, { Component } from 'react'

import { Container, Card, Button, Modal } from 'react-bootstrap'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

import "video-react/dist/video-react.css"; // import css
import { Player,BigPlayButton } from 'video-react';

export default class VideoSection extends Component {
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
            <Container>
                <Card className="text-center pb-5">
                    <Card.Body>
                        <Card.Title className="serviceMainTitle">How I Do</Card.Title>
                        <Card.Text className="vedioDescription">
                        Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.
                        </Card.Text>
                        <FontAwesomeIcon className="vedioFontAwasam" onClick={this.handleShow} icon={faPlayCircle} />
                    </Card.Body>
                </Card>
            </Container>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position="center" />
                </Player>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}
