
import React from 'react'
import { Link } from 'react-router-dom'

function VoteCandidateCard(props) {
  return (
    

  
    
  <div className=" w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    
    <img className="h-40 object-cover rounded-xl h-40 object-cover rounded-xl" src={props.image} alt="" />
    <div className="p-2">
    
    <h2 className="font-bold text-lg mb-2 ">{props.name}</h2>
    <h3 className="font-light text-color text-slate-600 text-base mb-2 ">{props.title}</h3>
   
    <p className="text-sm text-gray-600">{props.bio}</p>
    </div>
 
    <div className="m-2">
    <Link role='button' to={``}  className="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">{props.acti}</Link>
    </div>
  </div>


  )
}

export default VoteCandidateCard

