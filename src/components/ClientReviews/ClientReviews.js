import React, { Component } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Col, Container, Row } from 'react-bootstrap';

import ClientPic from '../../asset/images/Joy.png'

export default class ClientReviews extends Component {
    render() {

        var settings = {
            autoplaySpeed:3000,
            autoplay: true,
            vertical:true,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <>
            <Container>
            <h2 className="serviceMainTitle text-center"> Client Reviews </h2>
            <Slider {...settings}>
                <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="clientImage" src={ClientPic} />
                            <h4>Web Development</h4>
                            <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="clientImage" src={ClientPic} />
                            <h4>Web Development</h4>
                            <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="clientImage" src={ClientPic} />
                            <h4>Web Development</h4>
                            <p>Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        </Col>
                    </Row>
                </div>
            </Slider>
            </Container>
            
            </>
        )
    }
}
