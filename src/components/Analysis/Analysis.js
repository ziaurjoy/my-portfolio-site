import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

import RestClinet from '../../Rest_API/RestClient'
import AppUrl from '../../Rest_API/AppUrl'

export default class Analysis extends Component {

    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        RestClinet.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data: result})
        })
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
                                <XAxis dataKey="technology"/>
                                <Tooltip/>
                                <Bar dataKey="experience" fill={blue} >
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
