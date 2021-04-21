import React, { Component } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import WebImage from '../../asset/images/web.svg'
import MobileImage from '../../asset/images/mobile.svg'
import GraphicImage from '../../asset/images/graphics.svg'

import RestClinet from '../../Rest_API/RestClient'
import AppUrl from '../../Rest_API/AppUrl'

export default class Service extends Component {
    constructor(){
        super()
        this.state = {
            services: []
        }

    }

    componentDidMount(){
        RestClinet.GetRequest(AppUrl.Service).then(result=>{
            this.setState({services: result})
        })
    }
    render() {
        const mydata = this.state.services;

        const singleData = mydata.map(myList => {

            return <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={myList.service_image} />
                            <h2 className = "serviceName">{myList.service_name}</h2>
                            <p className="serviceDescription text-center">{myList.service_description}</p>
                        </div>
                    </Col>
        })
        return (
            <>
            <Container>
                <h1 className="serviceMainTitle text-center">My Service</h1>
                <Row>
                    {singleData}
                </Row>
            </Container>
                
            </>
        )
    }
}
