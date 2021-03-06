import React, { Component } from 'react'

import FooterSection from '../components/FooterSection/FooterSection'
import TopPages from '../components/TopPages/TopPages'
import AllCourse from '../components/AllCourse/AllCourse'
import TopNaver from '../components/TopNaver/TopNaver'

export default class AllCoursPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <>  <TopNaver title="Courses"  />
                <TopPages pageTitle = "All Courses" />
                <AllCourse />
                <FooterSection />
            </>
        )
    }
}
