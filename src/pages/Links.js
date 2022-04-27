import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Links() {
  return (
    <div className="links">
      <a
        className="Link"
        href="https://www.tsilhqotin.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tŝilhqot’in National Government
        <LaunchIcon style={{ paddingLeft: "15px" }} />
      </a>
      <p className="Links">Offical Tŝilhqot’in National Government website</p>
      <a
        className="Link"
        href="https://tsilhqotinlanguage.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tŝilhqot’in Language
        <LaunchIcon style={{ paddingLeft: "15px" }} />
      </a>
      <p className="Links">Offical Tŝilhqot’in Language website</p>
    </div>
  );
}
