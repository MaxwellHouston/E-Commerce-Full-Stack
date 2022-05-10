import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmPasswordInput } from "./inputs/ConfirmPasswordInput";
import { EmailInput } from "./inputs/EmailInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { PasswordInput } from "./inputs/PasswordInput";

export function Register () {

    const [newUser, setNewUser] = useState({first_name:'', last_name:'', email:'', password:'', confirmPassword:''});

    const updateNewUser = (input, value) => {
        setNewUser((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const validatePasswords = () => {
        if(newUser.password.length < 6){
            alert('Password must be 6 or more characters');
            return
        }
        if(newUser.password !== newUser.confirmPassword){
            alert('Passwords must match');
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validatePasswords();
        console.log('sucsess')
    };

    return(
        <div className="register-page">
            <form className="register-form">
                <h1>Register</h1>
                <button className="third-party-login-btn" id="google-log"><Link to='#'>Login with Google</Link></button>
                <button className="third-party-login-btn" id="facebook-log"><Link to='#'>Login with Facebook</Link></button>
                <p className="or-divider"><span>Or</span></p>
                <FirstNameInput updateNewUser={updateNewUser} firstname={newUser.first_name} />
                <LastNameInput updateNewUser={updateNewUser} lastname={newUser.last_name} />
                <EmailInput updateNewUser={updateNewUser} email={newUser.email} />
                <PasswordInput updateNewUser={updateNewUser} password={newUser.password} />
                <ConfirmPasswordInput updateNewUser={updateNewUser} confirmPassword={newUser.confirmPassword} />
                <button onClick={handleSubmit} type="submit" className="submit-btn">Register</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>               
            </form>
        </div>
    )
}