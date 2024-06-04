import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroCards from './components/HeroCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Best IT Jobs Near You" subtitle="Find professional work in no time!"/>
      <HeroCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App
