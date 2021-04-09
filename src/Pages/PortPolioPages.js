import React, { Component } from 'react'


import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'
import PortFolio from '../components/PortFolio/PortFolio'

export default class PortPolioPages extends Component {
    render() {
        return (
            <>  
            <TopNaver title="Portpolio"  />
            <TopPages pageTitle = "Protpolio Pages" />
            <PortFolio/>
            <FooterSection />
            </>
        )
    }
}
