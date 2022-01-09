
import React from 'react'
import { Badge } from '../..';
import "./Recap.css";
import AvatarImage from "../../../assets/unknow.jpeg";

const Recap = () => {
    return (
        <div className='invoices-container'>
            <div className="card-content">
                <div className="invoice">
                    <div className="info">
                        <div className="avatar">
                            <img src={AvatarImage} alt='la phot' />
                        </div>
                        <div className="text-container">
                            <h3 className='title'>Dorgeles Dje Bi</h3>
                            <h5 className='subtitle'>Caissier</h5> 
                        </div>
                    </div>
                    <div className="container">
                        <Badge content='mardi' />
                        <div className="somme">
                            200 000 Fcfa
                        </div>
                    </div>
                </div>

                <div className="invoice">
                    <div className="info">
                        <div className="avatar">
                            <img src={AvatarImage} alt='la phot' />
                        </div>
                        <div className="text-container">
                            <h3 className='title'>Gauley -dorgeles</h3>
                            <h5 className='subtitle'>Caissier</h5> 
                        </div>
                    </div>
                    <div className="container">
                        <Badge content='mardi' />
                        <div className="somme">
                            188 000 Fcfa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recap
