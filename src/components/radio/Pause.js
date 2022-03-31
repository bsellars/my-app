import React from "react";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseCircleIcon fontSize="large" />
    </button>
  );
}
