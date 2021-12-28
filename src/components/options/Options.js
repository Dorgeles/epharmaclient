import React from 'react'
import "./Options.css";
import logoPharma from "../../assets/logo-pharma.jpg";
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import Ops from './Ops';
import {optionList} from "./data";

const Options = () => {
    return (
        <section id="option">
            <div className="container options">
                <div className="u-title">
                    <BsFillBookmarkStarFill color='#2c3e50' size={30} />
                    <h2>Les options clées</h2>
                    <p className="u-text-small u-text-dark">
                        Apharma Fresco est votre outil qui vous facilite la vie en officine.
                        Voci de façons claire les possibilitées qui s'ouvre à vous.
                    </p>
                </div>
            </div>
            <div className="option-content">
                <div className="option-left">
                    <img src={logoPharma} alt="logo de l'application"/>
                </div>
                <div className="option-right">
                    {
                        optionList.map((option)=>(
                            <Ops key={option.id} icon={option.icon} heading={option.heading} text={option.text}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Options
