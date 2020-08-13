import React,{useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import AvatarIcon from "@material-ui/core/Avatar";
import {Link}from 'react-router-dom'
const Header = () => {
const [inputSearch,setInputSearch] =useState('')

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to='/'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
          alt=""
          className="header_logo"
        />
        </Link>
      </div>

      <div className="header_center">
        <input type="text" placeholder="Search"
        onChange={(e)=>setInputSearch(e.target.value)}
         value={inputSearch} />
         <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header_button" /></Link>
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_icon hide"/>
        <AppsIcon className="header_icon hide"/>
        <NotificationIcon className="header_icon hide"/>
        <AvatarIcon
          alt="SS"
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
      
    </div>
  );
};

export default Header;
