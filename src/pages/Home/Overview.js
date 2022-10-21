import React, { useState } from 'react'
import HorizontalChart from '../../components/HorizontalChart/HorizontalChart'
import {UserData} from '../../chartData'
import {Chart as ChartJs} from 'chart.js/auto'
import CountdownTimer from '../../components/CountDownTimer/CountdownTimer'

const Overview = () => {

  const [userData, setUserData] = useState({
    labels: [UserData.map((data)=> data.year)],
    dataset: [{
      label: "Users Gained",
      data: UserData.map((data)=> data.userGain),

    }]
  });
  return (
    <div >
        <div className='container '>
      <div className='py-5 px-2'>
        <CountdownTimer
     countdownTimestampMs={1671659444000}/>
      </div>
      
      <div className='  py-5 px-40 '>
      <HorizontalChart chartData={userData}/>

      
   
      </div>
      </div>

      <div className='relative'>

        <div className='absolute right-1/2'>
          <h1>SRC Races</h1>
        </div>

      </div>

    </div>
  )
}

export default Overview