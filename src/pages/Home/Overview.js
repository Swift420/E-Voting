import React, { useState } from 'react'
import HorizontalChart from '../../components/HorizontalChart/HorizontalChart'
import {UserData} from '../../chartData'
import {Chart as ChartJs} from 'chart.js/auto'

const Overview = () => {

  const [userData, setUserData] = useState({
    labels: [UserData.map((data)=> data.year)],
    dataset: [{
      label: "Users Gained",
      data: UserData.map((data)=> data.userGain),

    }]
  });
  return (
    <div className='container mx-auto'>
      <div className=' flex '>
      <HorizontalChart chartData={userData}/>
      <h1>hello</h1>
      </div>
      

    </div>
  )
}

export default Overview