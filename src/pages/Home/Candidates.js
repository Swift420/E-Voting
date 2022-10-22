import React from 'react'
import CandidateCard from '../../components/Card/CandidateCard'
import {candidatesData} from '../../candidateData'

function Candidates() {
  return (
    
    <div className='py-10 gap-12 flex-wrap flex justify-center items-center '>
        
    {candidatesData.map((data)=> (
        
        <CandidateCard key={data.id} id={data.id} name={data.fullname} title={data.candidancy} bio={data.faculty} image={data.pictures[0]} acti="Read More"/>
    ))}
        
    </div>

    
    
  )
}

export default Candidates