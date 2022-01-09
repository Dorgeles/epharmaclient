import React from 'react';
import "./RecuListTile.css"

const RecuListTile = ({nomClient, total, timestamp}) => {
    return (
            <div className="recu-part">
                <div className="avatar-image"></div>
                <div className="avart-detail">
                    <h3>{nomClient} : {total} Fcfa</h3> 
                    <h5>{timestamp}</h5>
                </div>
            </div>
    )
}

export default RecuListTile
