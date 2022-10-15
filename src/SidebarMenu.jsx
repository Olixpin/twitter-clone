import React from "react";
import "./SidebarMenu.css";

const SidebarMenu = ({ titleMenu, icon, className }) => {
  return (
    <div>
      <div className="menus">
        <div className="menu__icon">{icon}</div>
        <div className="menu__title">{titleMenu}</div>
      </div>
    </div>
  );
};

export default SidebarMenu;
