import React, { Component } from 'react'



import TopPages from '../components/TopPages/TopPages'
import TopNaver from '../components/TopNaver/TopNaver'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import FooterSection from '../components/FooterSection/FooterSection'

export default class CourseDetailsPages extends Component {


    componentDidMount(){
        window.scroll(0,0)
    }
    
    render() {
        return (
            <>
                <TopNaver title="Course Details" />
                <CourseDetails />
                <FooterSection />
            </>
        )
    }
}
