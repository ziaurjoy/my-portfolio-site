import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ProjectImage from '../../asset/images/project.png'
import AppUrl from '../../Rest_API/AppUrl'
import RestClinet from '../../Rest_API/RestClient'

export default class RecentProjects extends Component {

    constructor(){
        super()
        this.state = {
            mydata: []
        }
    }
    componentDidMount(){
        RestClinet.GetRequest(AppUrl.ProjectHome).then(result =>{
            this.setState({mydata: result})
        })
    }

    render() {
        const myArray = this.state.mydata
        const singleArrayData = myArray.map(singleData =>{
            return <Col lg={4} md={6} sm={12}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={ProjectImage} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">{singleData.project_name}</Card.Title>
                                <Card.Text>
                                {singleData.short_description}
                                </Card.Text>
                                <Button  variant="primary"><Link className="detailsButton" to='/projectdetails'>Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
        })
        return (
            
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Recent Projects</h1>
                        <Row>
                            {singleArrayData}
                        </Row>
                    </Container>
                </Fragment>
          
        )
    }
}
