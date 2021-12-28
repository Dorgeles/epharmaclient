/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Sidebar.css";
import { Badge } from "../..";
import AvatarImage from "../../../assets/unknow.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profileContainer">
        <img src={AvatarImage} />
        <div className="sidebar-name">DJE BI GAULEY</div>
        <Badge content={"Pharmacien"} />
        sidebar
      </div>
    </div>
  );
};

export default Sidebar;
