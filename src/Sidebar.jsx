import React from "react";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";
import { ReactComponent as Logo } from "../img/twitter.svg";
import { ReactComponent as Home } from "../img/Home.svg";
import { ReactComponent as Notifications } from "../img/Notification.svg";
import { ReactComponent as Messages } from "../img/Message.svg";
import { ReactComponent as Bookmarks } from "../img/Bookmark.svg";
import { ReactComponent as Lists } from "../img/List.svg";
import { ReactComponent as Explore } from "../img/Explore.svg";
import { ReactComponent as More } from "../img/More.svg";
import { ReactComponent as Profile } from "../img/Profile.svg";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__logoContainer">
          <Logo className="sidebar__logo" />
        </div>

        <SidebarMenu titleMenu="Home" icon={<Home />} />
        <SidebarMenu titleMenu="Explore" icon={<Explore />} />
        <SidebarMenu titleMenu="Notifications" icon={<Notifications />} />
        <SidebarMenu titleMenu="Messages" icon={<Messages />} />
        <SidebarMenu titleMenu="Bookmarks" icon={<Bookmarks />} />
        <SidebarMenu titleMenu="Lists" icon={<Lists />} />
        <SidebarMenu titleMenu="Profile" icon={<Profile />} />
        <SidebarMenu titleMenu="More" icon={<More />} />

        <button>Tweet</button>
      </div>

      <div className="sidebar__bottom">
        {/* pass an image to avatar */}
        <Avatar
          src="https://storage.googleapis.com/replit/images/1652805279185_01eea81951dbbfa37f9a1311d0e2529f.jpeg"
          alt="profile"
        />

        <div className="sidebar__profile">
          <h3>John Doe</h3>
          <p>@johndoe</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
