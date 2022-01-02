import React from 'react'
import "./RecuCard.css";

const RecuCard = () => {
    return (
        <div className="recuContainer">
            <div className="recu-part">
                <div className="avatar-image"></div>
                <div className="avart-detail">
                    <h3>Les logo design</h3>
                </div>
            </div>

            <div className="recu-part">
                <div className="avatar-image"></div>
                <div className="avart-detail">
                    <h3>Les logo design 1</h3>
                    <h5>il y a 2heures</h5>
                </div>
            </div>

            <div className="recu-part">
                <div className="avatar-image"></div>
                <div className="avart-detail">
                    <h3>Les logo design 2</h3>
                    <h5>il y a 2 jours</h5>
                </div>
            </div>
            <h5>Voir tous les reçus</h5>
        </div>
    )
}

export default RecuCard
