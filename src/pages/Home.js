import React from 'react'
import Radio from '../components/radio/Radio'
import Radioschedule from '../components/radio/schedule'

const Home = () => {
  return (
    <div className='home'>
      <div className='backDrop'>
        <Radio />
        <Radioschedule />
      </div>
    </div>

  )
}

export default Home