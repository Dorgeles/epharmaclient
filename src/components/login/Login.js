import { TextField } from '@material-ui/core'
import React from 'react'
import Button from '../UI/button/Button';
import logoPharma from "../../assets/logo-pharma.jpg";
import "./Login.css";

const Login = () => {
    return (
        <section id='login'>
            <div className="container_login">
                <div className="icon_class">
                    <img src={logoPharma} alt="logo app" />
                </div>
                <div className="u-text-small">Connexion</div>
                <div className="col-6">
                    <TextField id="username" type="text" variant="outlined" label="Entrez votre nom d'utilisateur" fullWidth/>
                </div>
                <div className="col-6">
                    <TextField id="password" type="text" variant="outlined" label="Entrez votre mot de passe" fullWidth/>
                </div>
                <Button btnClass={"btn-light"} text={"Continuer"} href={"/dashboard"}/>
                <Button btnClass={"btn-dark"} text={"Vers l'acceuil"} href={"/"}/>
            </div>
        </section>
    )
}

export default Login
