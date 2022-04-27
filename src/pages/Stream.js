import React from "react";
import Radio from "../components/radio/Radio";
import Radioschedule from "../components/radio/schedule";

const Stream = () => {
  return (
    <div className="stream">
      <div className="backDrop">
        <Radio />
        <Radioschedule />
      </div>
    </div>
  );
};

export default Stream;
