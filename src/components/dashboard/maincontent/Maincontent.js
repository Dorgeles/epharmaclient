import React from 'react';
import "./Maincontent.css";
import { DashNavbar, Info, RecuCard, Revenu, Recap } from '../..';

const Maincontent = () => {
    return (
        <div className="container-maincontent">
            <DashNavbar />
            <div className="sub-container">
                <div className="section-one">
                    <div className="collumn-one-1">
                        <Revenu total={"7000"}/>
                        <Info />
                    </div>
                    <div className="collumn-two-1">
                        <h2>Les reçus</h2>
                        <RecuCard />
                    </div>
                </div>
                <div className="section-two">
                    <div className="collumn-one-2">
                        <div className="invoice-container">
                        <h2>Ventes effectuées</h2>
                            <Recap />
                        </div>
                    </div>
                    <div className="collumn-two-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent
