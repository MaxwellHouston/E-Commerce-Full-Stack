import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = ({target}) => {
        setEmail(target.value);
    }
    const handlePassword = ({target}) => {
        setPassword(target.value);
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
                <fieldset className="input-container">
                    <label for='email' className={email ? 'input-filled' : 'input-empty'}>Email</label>
                    <input name='email' onChange={handleEmail} type='email' />
                </fieldset>
                <fieldset className="input-container">
                    <label for='password' className={password ? 'input-filled' : 'input-empty'}>Password</label>
                    <input name='password' onChange={handlePassword} type='password' />
                </fieldset>
                <button onClick={handleSubmit} type="submit" className="submit-btn">Login</button>
                <p>No account? <Link to='/register' >Register Here</Link></p>               
            </form>
        </div>
    )
}