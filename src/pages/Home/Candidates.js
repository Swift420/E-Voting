import React from 'react'
import CandidateCard from '../../components/Card/CandidateCard'

function Candidates() {
  return (
    
    <div className='py-10 gap-4 flex-wrap flex justify-center items-center '>
        <CandidateCard name="Anakin" title="President" bio="Why so serious"/>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
    </div>
    
  )
}

export default Candidates