import React, { Component } from 'react'


import MyService from '../components/MyService/MyService'
import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'
import Contact from '../components/Contact/Contact'

export default class MyServicePages extends Component {
    render() {
        return (
            <>  <TopNaver  title="Service"  />
                <TopPages pageTitle = "My Service" />
                <MyService/>
                <Contact />
                <FooterSection />
            </>
        )
    }
}
