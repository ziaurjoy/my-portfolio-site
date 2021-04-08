import React, { Component } from 'react'


import AboutDescription from "../components/AboutDescription/AboutDescription";
import FooterSection from "../components/FooterSection/FooterSection";
import TopNaver from "../components/TopNaver/TopNaver";
import TopPages from "../components/TopPages/TopPages";

export default class About extends Component {
    render() {
        return (
            <>
                <TopNaver />
                <TopPages pageTitle = "About Me" />
                <AboutDescription />
                <FooterSection />
            </>
        )
    }
}
