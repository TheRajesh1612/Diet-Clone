import React from 'react'
import Header1 from '../components/Header1'
import Header2 from '../components/Header2'
import SlidingPage from '../components/SlidingPage'
import ChairmanMessage from '../components/ChairmanMessage'
import ProfessionalBodies from '../components/ProfessionalBodies'
import NewsSection from '../components/NewsSection'
import InformationSection from '../components/InformationSection'
import VideoSection from '../components/VideoSection'
import GallerySection from '../components/GallerySection'
import TestimonialSection from '../components/TestimonialSection'
import CampusDriveSection from '../components/CampusDriveSection'
import FooterSection from '../components/FooterSection'

const LandingPage = () => {
  return (
    <div>

    <div class="quick-enquiry">Quick Enquiry</div>
        <Header1 />
        <Header2 />
        <SlidingPage/>
        <ChairmanMessage/>
        <ProfessionalBodies/>
        <NewsSection/>
        <InformationSection/>
        <VideoSection/>
        <GallerySection/>
        <TestimonialSection/>
        <CampusDriveSection/>
        <FooterSection/>
    </div>
  )
}

export default LandingPage