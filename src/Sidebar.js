import React from "react";

import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Nguyen Dung"
        src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
      ></SidebarRow>
      <SidebarRow title="Page" Icon={FlagIcon}></SidebarRow>
      <SidebarRow title="Friend" Icon={PeopleIcon}></SidebarRow>
      <SidebarRow title="Messenger" Icon={MessageIcon}></SidebarRow>
      <SidebarRow title="Saved" Icon={BookmarkIcon}></SidebarRow>
      <SidebarRow title="see more" Icon={ExpandMoreIcon}></SidebarRow>
    </div>
  );
}

export default Sidebar;
