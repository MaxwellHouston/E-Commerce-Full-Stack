import React from "react";

export function Register () {
    return(
        <div className="register-page">
            <div className="background-container"></div>
            <form className="register-form">
                <h1>Register</h1>
                <button className="google-log"><span>Login with Google</span></button>
                <button className="facebook-log"><span>Login with Facebook</span></button>
                <p className="or-divider"><span>Or</span></p>
                <label for='first-name'>First Name</label>
                <input name='first-name' id='first-name' />
                <label for='last-name'>Last Name</label>
                <input name='last-name' id='last-name' />
                <label for='email'>Email</label>
                <input name='email' id='email' type='email' />
                <label for='password'>Password</label>
                <input name='password' id='password' type='password' />
                <label for='confirm-password'>Confirm Password</label>
                <input name='confirm-password' id='confirm-password' type='confirm-password' />
            </form>
        </div>
    )
}