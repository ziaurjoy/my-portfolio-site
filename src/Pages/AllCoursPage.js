import React, { Component } from 'react'

import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import AllCourse from '../components/AllCourse/AllCourse'
import TopNaver from '../components/TopNaver/TopNaver'

export default class AllCoursPage extends Component {
    render() {
        return (
            <>  <TopNaver />
                <TopPages pageTitle = "All Courses" />
                <AllCourse />
                <FooterSection />
            </>
        )
    }
}
