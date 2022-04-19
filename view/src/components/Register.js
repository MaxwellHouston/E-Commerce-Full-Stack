import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Register () {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstName = ({target}) => {
        setFirstName(target.value);
    }
    const handleLastName = ({target}) => {
        setLastName(target.value);
    }
    const handleEmail = ({target}) => {
        setEmail(target.value);
    }
    const handlePassword = ({target}) => {
        setPassword(target.value);
    }
    const handleConfirmPassword = ({target}) => {
        setConfirmPassword(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="register-page">
            <form className="register-form">
                <h1>Register</h1>
                <button className="third-party-login-btn" id="google-log"><Link to='#'>Login with Google</Link></button>
                <button className="third-party-login-btn" id="facebook-log"><Link to='#'>Login with Facebook</Link></button>
                <p className="or-divider"><span>Or</span></p>
                <fieldset className="input-container">
                    <label for='first-name' className={firstname ? 'input-filled' : 'input-empty'} >First Name</label>
                    <input onChange={handleFirstName} name='first-name' />
                </fieldset>
                <fieldset className="input-container">
                    <label for='last-name' className={lastname ? 'input-filled' : 'input-empty'}>Last Name</label>
                    <input onChange={handleLastName} name='last-name' />
                </fieldset>
                <fieldset className="input-container">
                    <label for='email' className={email ? 'input-filled' : 'input-empty'}>Email</label>
                    <input name='email' onChange={handleEmail} type='email' />
                </fieldset>
                <fieldset className="input-container">
                    <label for='password' className={password ? 'input-filled' : 'input-empty'}>Password</label>
                    <input name='password' onChange={handlePassword} type='password' />
                </fieldset>
                <fieldset className="input-container">
                    <label for='confirm-password' className={confirmPassword ? 'input-filled' : 'input-empty'}>Confirm Password</label>
                    <input name='confirm-password' onChange={handleConfirmPassword} type='password' />
                </fieldset>
                <button onClick={handleSubmit} type="submit" className="submit-btn">Register</button>               
            </form>
        </div>
    )
}