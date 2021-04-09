import React, { Component } from 'react'
import HomePage from '../Pages/HomePage'
import AllCoursPage from '../Pages/AllCoursPage'
import MyServicePages from '../Pages/MyServicePages'
import PortPolioPages from '../Pages/PortPolioPages'
import ContactPage from '../Pages/ContactPage'
import About from '../Pages/About'

import {Switch, Route} from 'react-router-dom'


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
                </Switch>
                
            </>
        )
    }
}
