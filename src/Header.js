import React from "react";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MovieIcon from "@material-ui/icons/Movie";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon></SearchIcon>
          <input
            className="header__input"
            placeholder="Search on Facebook"
            type="text"
          ></input>
        </div>
      </div>
      <div className="header__center ">
        <div className="header__option icon__Active">
          <HomeIcon className="Icon-root " fontSize="large"></HomeIcon>
        </div>
        <div className="header__option">
          <PeopleOutlineIcon
            className="Icon-root"
            fontSize="large"
          ></PeopleOutlineIcon>
        </div>
        <div className="header__option">
          <MovieIcon className="Icon-root" fontSize="large"></MovieIcon>
        </div>

        <div className="header__option">
          <AccountBalanceIcon
            className="Icon-root"
            fontSize="large"
          ></AccountBalanceIcon>
        </div>

        <div className="header__option">
          <GroupWorkIcon className="Icon-root" fontSize="large"></GroupWorkIcon>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h4>Nguyen Dung</h4>
        </div>
        <IconButton>
          <AddIcon className="header__rightIcon"></AddIcon>
        </IconButton>
        <IconButton>
          <MessageIcon className="header__rightIcon"></MessageIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon className="header__rightIcon"></NotificationsIcon>
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon className="header__rightIcon"></ArrowDropDownIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
