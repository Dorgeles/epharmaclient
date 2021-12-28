import React from 'react'
import "./Ops.css";
import { BsHexagon } from 'react-icons/bs';

const Ops = ({icon, heading, text}) => {
    return (
        <div className='option'>
            <div className="option-icon">
                <BsHexagon color='#2c3e50' size={55}/>
                <div className="inner-icon">{icon}</div>
            </div>
            <div className="option-text">
                <h3>{heading}</h3>
                <p className="u-text-small">{text}</p>
            </div>
        </div>
    )
}

export default Ops
