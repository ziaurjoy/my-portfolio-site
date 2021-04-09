import React, { Component } from 'react'
import HomePage from '../Pages/HomePage'
import AllCoursPage from '../Pages/AllCoursPage'
import MyServicePages from '../Pages/MyServicePages'
import PortPolioPages from '../Pages/PortPolioPages'
import ContactPage from '../Pages/ContactPage'
import About from '../Pages/About'
import RefundPolicyPages from '../Pages/RefundPolicyPages'

import {Switch, Route} from 'react-router-dom'
import ProjectDetailsPages from '../Pages/ProjectDetailsPages'
import CourseDetailsPages from '../Pages/CourseDetailsPages'


export default class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component = {HomePage} />
                    <Route exact path="/course" component ={AllCoursPage} />
                    <Route exact path="/service" component ={MyServicePages} />
                    <Route exact path="/portpolio" component ={PortPolioPages} />
                    <Route exact path="/contact" component ={ContactPage} />
                    <Route exact path="/about" component ={About} />
                    <Route exact path="/refund" component ={RefundPolicyPages} />
                    <Route exact path="/projectdetails" component ={ProjectDetailsPages} />
                    <Route exact path="/coursedetails" component ={CourseDetailsPages} />
                </Switch>
                
            </>
        )
    }
}
