import React, { Component } from 'react'


import TopBanner from '../components/TopBanner/TopBanner'
import Service from '../components/Service/Service'
import TopNaver from '../components/TopNaver/TopNaver'
import Analysis from '../components/Analysis/Analysis'
import Summary from '../components/Summary/Summary'
import RecentProjects from '../components/RecentProject/RecentProjects'
import Courses from '../components/Courses/Courses'
import VideoSection from '../components/VideoSection/VideoSection'
import ClientReviews from '../components/ClientReviews/ClientReviews'
import FooterSection from '../components/FooterSection/FooterSection'

export default class HomePage extends Component {
    render() {
        return (
            <>
                <TopNaver title="Home"  />
                <TopBanner />
                <Service />
                <Analysis />
                <Summary />
                <RecentProjects />
                <Courses />
                <VideoSection />
                <ClientReviews />
                <FooterSection />
            </>
        )
    }
}
