import React from 'react'
import CandidateCard from '../../components/Card/CandidateCard'
import {candidatesData} from '../../candidateData'
import { useParams } from 'react-router-dom';
import VoteCandidateCard from '../../components/Card/VoteCandidateCard';

function CandidateScreen() {
    function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

    const {candidancy} = useParams();

    const cand = capitalizeFirstLetter(candidancy);
   
    var arr = candidatesData.filter((data)=> data.candidancy.includes(cand) == true)

    console.log(arr)
  return (
    <div className='py-10 gap-12 flex-wrap flex justify-center items-center '>

        
        
    {arr.map((data)=> (
        
        <VoteCandidateCard key={data.id} id={data.id} name={data.fullname} title={data.candidancy} bio={data.faculty} image={data.pictures[0]} acti="Vote"/>
    ))}
        
    </div>
  )
}

export default CandidateScreen