/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Header.css";
import logoPharma from "../../assets/logo-pharma.jpg";
import Button from '../UI/button/Button';
import "../UI/button/Button.css";
import {BsMouse} from "react-icons/bs";

const Header = () => {
    return (
        <section id='header'>
            <div className="container header">
                 <div className="header-left">
                     <h1>
                         <span>VOTRE APPLICATION DE GESTION</span>
                         <span>À DÉCOUVRIR SUR TOUTES VOS PLATEFORME</span>
                         <span>AVEC UNE COUCHE DE SECURITÉ</span>
                    </h1>
                         <p className="u-text-small u-text-light">
                             Epharm fresco est votre application de gestion, spécialement designé pour les besoins des populations et pour la
                             claire transparence des les process de gestion d'une pharmacie urbaine et moderne.
                         </p>
                         <div className="header-cta">
                         <Button btnClass={"btn-dark"} text={"Commencer"} href={"/connexion"}/>
                         <Button btnClass={"btn-light"} text={"Comment ça marche"} href={"#"}/>
                         </div>
                    
                 </div>
                 <div className="header-rigth">
                     <img src={logoPharma} alt="logo app" />
                 </div>
            </div>
            <div className="floating-icon">
                <a href="#option">
                    <BsMouse color="#fff" size={25} className="mouse"/>
                </a>
            </div>
        </section>
    )
}

export default Header
