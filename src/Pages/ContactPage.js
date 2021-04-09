import React, { Component } from 'react'

import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'
import Contact from '../components/Contact/Contact'

export default class AllCoursPage extends Component {
    render() {
        return (
            <>  <TopNaver  title="Contact"  />
                <TopPages pageTitle = "Contact Me" />
                <Contact/>
                <FooterSection />
            </>
        )
    }
}