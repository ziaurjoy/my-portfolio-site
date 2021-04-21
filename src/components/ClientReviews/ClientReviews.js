import React, { Component } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Col, Container, Row } from 'react-bootstrap';

import RestClinet from '../../Rest_API/RestClient';
import AppUrl from '../../Rest_API/AppUrl';

export default class ClientReviews extends Component {

    constructor(){
      super()
      this.state = {
        arrayData: []
      }
    }

    componentDidMount(){
      RestClinet.GetRequest(AppUrl.Clinet).then( result => {
        this.setState({arrayData: result})
      }).catch(error => {
        this.setState({arrayData: []})
      })
    }

    render() {


        const arrayData = this.state.arrayData
        const singleArray = arrayData.map( singleData => {
          return <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="clientImage" src={singleData.client_image} />
                            <h4>{singleData.client_title}</h4>
                            <p>{singleData.client_description}</p>
                        </Col>
                    </Row>
                  </div>
        })

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
                {singleArray}
            </Slider>
            </Container>
            
            </>
        )
    }
}
