/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Profile.css";
import Image from "../../assets/unknow.jpeg"

const Profile = () => {
    return (
        <div className='container-profile'>
            <img className="profileImage" src={Image} />
            <h1 className="profileName">Dje Bi Gauley</h1>
        </div>
    )
}

export default Profile
