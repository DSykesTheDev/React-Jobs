import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroCards from '../components/HeroCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero title="Find your dream job today!" subtitle="High quality IT jobs, at your fingertips"/>
      <HeroCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
