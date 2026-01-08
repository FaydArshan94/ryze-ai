'use client'
import CaseStudiesProof from '@/components/case-studies/CaseStudiesProof'
import IndustryResultsSection from '@/components/case-studies/IndustryResultsSection'
import TransformationSection from '@/components/case-studies/TransformationSection'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CaseStudiesHero from '@/components/sections/CaseStudiesHero'
import FinalCTA from '@/components/sections/CTA'
import React from 'react'

const page = () => {
  return (
    <div className='bg-linear-to-br from-slate-950 via-blue-950 to-slate-900'>
      <Navbar />
      <CaseStudiesHero />
      <TransformationSection />
      <IndustryResultsSection />
      <CaseStudiesProof />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default page
