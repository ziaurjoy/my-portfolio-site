import React, { Component } from 'react'

import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'
import PortFolio from '../components/PortFolio/PortFolio'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

export default class ProjectDetailsPages extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <TopNaver title="Project Details"  />
                <TopPages pageTitle = "Project Name" />
                <ProjectDetails />
                <FooterSection />
            </>
        )
    }
}
