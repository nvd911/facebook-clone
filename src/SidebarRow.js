import React from "react";
import "./SidebarRow.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarRow({ title, Icon, src }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}></Avatar>}
      {Icon && <Icon></Icon>}
      <p>
        <h4>{title}</h4>
      </p>
    </div>
  );
}

export default SidebarRow;
