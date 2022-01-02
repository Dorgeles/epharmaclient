import React from 'react'
import { Badge } from '../..'
import "./Info.css"


const Info = () => {
    return (
        <div className="info-card">
            <div className="card-card">
                <div className="card-content">
                    <div className="row">
                        <h2>98</h2>
                        <div className="container-info">
                            <h3>Patients</h3>
                            <h5>En hausse de 20%</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-card">
                <div className="card-content">
                    <div className="row">
                        <h2>32</h2>
                        <div className="container-info">
                            <h3>Reçus</h3>
                            <h5>les 8 derniers mois</h5>
                        </div>
                    </div>
                    <div className="row">
                        <Badge content="Fresco" glow/>
                        <Badge content="lundi" glow/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Info
