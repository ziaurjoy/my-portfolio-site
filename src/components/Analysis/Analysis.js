import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

export default class Analysis extends Component {
    constructor(){
        super()
        this.state = {
            data : [
                {
                    Technology: 'Python',
                    Experience: 100
                },
                {
                    Technology: 'Django',
                    Experience: 100
                },
                {
                    Technology: 'SQL',
                    Experience: 80
                },
                {
                    Technology: 'HTML5',
                    Experience: 90
                },
                {
                    Technology: 'CSS',
                    Experience: 80
                },
                {
                    Technology: 'JavaScript',
                    Experience: 70
                },
                {
                    Technology: 'React',
                    Experience: 70
                },
            ]
        }
    }
    render() {
        var blue = "rgb(0,115,230)"
        return (
            <>
            <Container className="text-center">
                <h1 className="serviceMainTitle">Technology Use</h1>
                <Row>
                     <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Experience" fill={blue} >
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>
                        <p className="text-justify des">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>                   
                        <p className="text-justify des">Want to build your website or app using the most up-to-date web development capabilities? Read our useful guidance and analysis to build the future of the web! Website Visibility. Website Performance.</p>                   
                    </Col>
                </Row>
            </Container>
                
            </>
        )
    }
}
