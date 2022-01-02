import React from 'react';
import "./Badge.css";

const Badge = ({content, glow=false, paid=false, late=false}) => {
    return (
        <div className="badge" glow={glow} paid={paid} late={late}>
            {content}
        </div>
    )
}

export default Badge
