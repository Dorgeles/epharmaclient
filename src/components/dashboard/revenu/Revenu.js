import React from 'react'
import {IoStatsChart} from "react-icons/io5";
import "./Revenu.css";
const Revenu = ({total}) => {
    return (
        <div className="revenu-card">
            <div className="card-content">
                <div className="chart">
                    <IoStatsChart />
                </div>
                <h3 className="revenu-text">Recette</h3>
                <h2 className="revenu">{total} Fcfa</h2>
                <h5 className="revenu-increase">+ 10% le mois passé</h5>
            </div>
        </div>
    )
}

export default Revenu
