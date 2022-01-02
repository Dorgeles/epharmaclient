import React from 'react';
import {FiSearch} from 'react-icons/fi';
import "./DashNavbar.css";

const DashNavbar = () => {
    return (
        <nav className="navbar-container">
            <h1>Bonjour,
                <span> DJE BI GAULEY</span>
            </h1>
            <div className="input-container">
                <div className="input-icon">
                    <FiSearch />
                </div>
                <input className='input-input' type="text" placeholder='Rechercher un medicament' />
            </div>
        </nav>
    )
}

export default DashNavbar
