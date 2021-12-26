import React, {useState, useEffect} from 'react'
import "./Navbar.css";
import {GiHospital} from "react-icons/gi";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri"
import Button from '../UI/button/Button';
import "../UI/button/Button.css"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className='container navbar'>
            <div className='logo'>
                <GiHospital color='#fff' size={35 }/>
                <p className="logo-text">
                    Pharma <span>Fresco</span>
                </p>
            </div>
            <menu>
                <ul className="nav-links" id={showMenu ? "nav-links-mobile": "nav-links-mobile-hide"}>
                    <li><a href="#">Acceuil</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Option</a></li>
                    <li><a href="#">Question</a></li>
                    <li>
                        <Button text={"Commencer"} btnClass={"btn-dark"} href={"#Faq"}/>
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu ? (<RiCloseLine color="#fff" size={30} />) : (<AiOutlineBars color='#fff' size={27}/>)
                }
            </div>
        </nav>
    )
}

export default Navbar
