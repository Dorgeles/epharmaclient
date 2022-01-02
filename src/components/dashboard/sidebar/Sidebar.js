/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Sidebar.css";
import { Badge } from "../..";
import AvatarImage from "../../../assets/unknow.jpeg";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import {AiOutlinePieChart} from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profileContainer">
        <div className="profileImage">
         <img src={AvatarImage} />
        </div>
        <div className="sidebar-name">DJE BI GAULEY</div>
        <Badge content={"Pharmacien"} />
        sidebar
      </div>
      <div className="links-container">
        <div className="links">
          <div className="link">
            <RiHomeLine size={30}/>
            <h3>Tableau de bord</h3>
          </div>
          <div className="link">
            <FaWallet size={30}/>
            <h3>Ventes</h3>
          </div>
          <div className="link">
            <RiFileCopyLine size={30}/>
            <h3>Inventaire</h3>
          </div>
          <div className="link">
            <AiOutlinePieChart size={30}/>
            <h3>Statistiques</h3>
          </div>
        </div>
        <div className="contact-container">
          <span>
            Un soucis ? 
          </span>
          <a href="#">Contactez le developeur</a>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
