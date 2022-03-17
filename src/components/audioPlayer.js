import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Player = () => {
    let audio = new Audio (`${'http://datsan.openbroadcaster.pro:8000/datsan'}`)
const Start = () => {
    audio.play().catch(console.log)
}

  return (
    <div>
        <PlayArrowIcon key = {audio} onClick ={Start}/>
    </div>
  )
}


export default Player


