import { Features } from '@/app/(home)/_components/Features'
import { Hero } from '@/app/(home)/_components/Hero'
import { Navbar } from '@/components/Navbar'
import { StatsSection } from '@/app/(home)/_components/StatsSection'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StatsSection/>
      <Features />
    </div>
  )
}

export default Home
