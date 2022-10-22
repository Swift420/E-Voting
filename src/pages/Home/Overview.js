import React, { useState } from 'react'
import HorizontalChart from '../../components/HorizontalChart/HorizontalChart'
import {UserData} from '../../chartData'
import {Chart as ChartJs} from 'chart.js/auto'
import CountdownTimer from '../../components/CountDownTimer/CountdownTimer'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'
import CandidateCard from '../../components/Card/CandidateCard'


const Overview = () => {

  const [userData, setUserData] = useState({
    labels: [UserData.map((data)=> data.year)],
    dataset: [{
      label: "Users Gained",
      data: UserData.map((data)=> data.userGain),

    }]
  });
  return (
    < >
        <div className='container '>
      <div className='py-5 px-2'>
        <CountdownTimer
     countdownTimestampMs={1671659444000}/>
      </div>
      
      <div className='  py-5 px-40 '>
      <HorizontalChart chartData={userData}/>

      
   
      </div>
      </div>

      

      <div className='py-10 px-10 flex flex-row'>
          <DoughnutChart name={"Sports SRC"}/>
          <DoughnutChart name={"Sports SRC"}/>
          <DoughnutChart name={"Sports SRC"}/>
      </div>
      <div className='py-10 px-10 flex flex-row'>
          <DoughnutChart name={"Sports SRC"}/>
          <DoughnutChart name={"Sports SRC"}/>
          <DoughnutChart name={"Sports SRC"}/>
      </div>
      


    </>
  )
}

export default Overview