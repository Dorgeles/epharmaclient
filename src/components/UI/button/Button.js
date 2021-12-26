import React from 'react'
import "./Button.css";


const Button = ({text, btnClass, href}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={href} className={`btn ${btnClass}`}>
            {text}
        </a>
    )
}

export default Button
