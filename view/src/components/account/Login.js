import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EmailInput } from "./inputs/EmailInput";
import { PasswordInput } from "./inputs/PasswordInput";

export function Login (){

    const [newLogin, setNewLogin] = useState({email:'', password:''});


    const updateNewLogin = (input, value) => {
        setNewLogin((prev) => ({
            ...prev,
            [input]: value
        }))
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="login-page">
            <form className="login-form">
                <h1>Login</h1>
                <button className="third-party-login-btn" id="google-log"><Link to='#'>Login with Google</Link></button>
                <button className="third-party-login-btn" id="facebook-log"><Link to='#'>Login with Facebook</Link></button>
                <p className="or-divider"><span>Or</span></p>
                <EmailInput updateNewLogin={updateNewLogin} email={newLogin.email} />
                <PasswordInput updateNewLogin={updateNewLogin} password={newLogin.password} />
                <button onClick={handleSubmit} type="submit" className="submit-btn">Login</button>
                <p>No account? <Link to='/register' >Register Here</Link></p>               
            </form>
        </div>
    )
}