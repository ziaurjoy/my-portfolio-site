import React, { Component } from 'react'
import {Navbar,Nav } from 'react-bootstrap'
import logo from '../../asset/images/Joy.jpeg'

import {NavLink} from 'react-router-dom'

//  Import CSS

import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

export default class TopNaver extends Component {
    constructor(props){
        super()
        // Useing State
        this.state = {
            navbarTitile: 'navTitle',
            navBackground: 'navBackground',
            navItem: 'navItem',
            titleNav: props.title
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
            <><title>{this.state.titleNav}</title>
                <Navbar fixed="top" className={this.state.navBackground} collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand><NavLink style={{textDecoration: 'none'}} className={this.state.navbarTitile} to='/'><img style={{height: "22px", width: "22px"}} src={logo} /> ZiaurJoy</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/">HOME</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/service">SERVICES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/course">COURSES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/portpolio">PORTFOLIO</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color: 'green'}} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
