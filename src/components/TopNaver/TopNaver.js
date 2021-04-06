import React, { Component } from 'react'
import {Navbar,Nav } from 'react-bootstrap'
import logo from '../../asset/images/Joy.jpeg'

//  Import CSS

import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

export default class TopNaver extends Component {
    constructor(){
        super()
        // Useing State
        this.state = {
            navbarTitile: 'navTitle',
            navBackground: 'navBackground',
            navItem: 'navItem'
        }
    }


    onScroll = () => {
        if(window.scrollY>100){
            this.setState({navbarTitile: 'navTitleScroll', navBackground: 'navBackgroundScroll', navItem: 'navItemScroll'})
        }else if(window.scrollY<100){
            this.setState({navbarTitile: 'navTitle', navBackground: 'navBackground', navItem: 'navItem'})
        }
    }


    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <>
                <Navbar fixed="top" className={this.state.navBackground} collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className={this.state.navbarTitile} href="#home"><img style={{height: "22px", width: "22px"}} src={logo} /> ZiaurJoy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                        <Nav.Link className={this.state.navItem} href="#">HOME</Nav.Link>
                        <Nav.Link className={this.state.navItem} href="#">SERVICES</Nav.Link>
                        <Nav.Link className={this.state.navItem} href="#">COURSES</Nav.Link>
                        <Nav.Link className={this.state.navItem} href="#">PORTFOLIO</Nav.Link>
                        <Nav.Link className={this.state.navItem} href="#">CONTACT</Nav.Link>
                        <Nav.Link className={this.state.navItem} href="#">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
