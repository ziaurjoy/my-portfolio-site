import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import {Link} from 'react-router-dom'

import CourseImage from '../../asset/images/course.jpg'

import axios from 'axios'
import RestClinet from '../../Rest_API/RestClient'
import AppUrl from '../../Rest_API/AppUrl'

export default class Courses extends Component {

    constructor(){
        super()
        this.state = {
            mydata: []
        }
    }
    componentDidMount(){
        RestClinet.GetRequest(AppUrl.CoursesHome).then(result =>{
            this.setState({mydata: result})
        }).catch( error => {
            this.setState({mydata: []})
        })
    }

    render() {
        const myArray = this.state.mydata
        const singleArrayData = myArray.map(singleData =>{
            return <Col lg={6} md={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img style={{width: "100%"}} src={singleData.image} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="courseTitle">{singleData.short_title}</h5>
                                <p className="courseDescription">{singleData.short_description}</p>
                                <Link to="/coursedetails">Details</Link>
                            </Col>
                        </Row>
                    </Col>
        })
        
        return (
            <>
            <Container>
                <h1 className='serviceMainTitle text-center'>Courses</h1>
                <Row>
                    {singleArrayData}
                </Row>
            </Container>
                
            </>
        )
    }
}
