import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profileSrc}></Avatar>
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
