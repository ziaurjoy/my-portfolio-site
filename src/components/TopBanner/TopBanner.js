

import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import AppUrl from '../../Rest_API/AppUrl';
import RestClinet from '../../Rest_API/RestClient';


export default class TopBanner extends Component {
    
    constructor() {
        super();
        this.state = { 
            homeTitle: '...',
            homeSubTitle: '....',

        };
      }
    
    //   componentDidMount() {
    //     fetch('http://localhost:8000/home/api/view/')
    //       .then(request_data => request_data.json())
    //       .then(result => this.setState({ homeTitle: result[0]['home_title'],homeSubTitle:  result[0]['home_subtitle']}));
    //   }

    componentDidMount(){
        RestClinet.GetRequest(AppUrl.Home).then(result=>{
            this.setState({homeTitle: result[0]['home_title'], homeSubTitle: result[0]['home_subtitle']})
        }).catch(error=>{
            this.setState({homeTitle: '', homeSubTitle: ''})
        })
    }
    
    render() {
        return (
            <>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className = "topTitle">{this.state.homeTitle}</h1>
                                    <h4 className="topSubTitle">{this.state.homeSubTitle}</h4>
                                    <Button variant="primary">More</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </>
        )
    }
}
