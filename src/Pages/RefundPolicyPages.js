import React, { Component } from 'react'

import RefundPolicy from '../components/RefundPolicy/RefundPolicy'
import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'


export default class RefundPolicyPages extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <div>
                <TopNaver title="Refund Policy" />
                <TopPages pageTitle = "Refund Policy" />
                <RefundPolicy />
                <FooterSection />
            </div>
        )
    }
}
