import React from "react";

import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";

import useAudioPlayer from './useAudioPlayer';

function Audio() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src="http://datsan.openbroadcaster.pro:8000/datsan" />
      </audio>
      <img height={120} src='https://www.tsilhqotin.ca/wp-content/uploads/2022/03/tsilhqotin_radio-removebg-preview-1.png' alt='TNG Radio' />
      <Song songName="Tŝilhqot’in Radio" songArtist="live stream" />
      <div className="controls">
        {playing ?
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        {/* <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/> */}
      </div>

    </div>
  );
}

export default Audio;