import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfirmPasswordInput } from "./inputs/ConfirmPasswordInput";
import { EmailInput } from "./inputs/EmailInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { PasswordInput } from "./inputs/PasswordInput";
import apiAccount from "../../utilities/api/apiAccount";
import { AlertModal } from "../Modal/AlertModal";
import { GoogleButton } from "./GoogleButton";
import { FacbookButton } from "./FacebookButton";

export function Register () {

    const [newUser, setNewUser] = useState({first_name:'', last_name:'', email:'', password:'', confirmPassword:''});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalSuccess, setModalSuccess] = useState(false);

    const navigate = useNavigate();

    const updateNewUser = (input, value) => {
        setNewUser((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const registerObject = {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    const registerSuccess = () => {
        navigate('/login');
    };

    const comparePasswords = () => {
        if(newUser.password !== newUser.confirmPassword){
            setModalMessage('Passwords must match');
            setShowModal(true);
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!comparePasswords()) return;
        let res = await apiAccount.register(registerObject);
        if(res.status === 400){
            if(res.data.name){
                setModalMessage(res.data.details.body[0].message);
                setShowModal(true);
            } else {
                setModalMessage(res.data.message);
                setShowModal(true);
            }
        } else if (res.status === 201){
            setModalMessage('User Created');
            setModalSuccess(true);
            setShowModal(true);
        } else {
            setModalMessage('Something went wrong. Please try again.');
            setShowModal(true); 
        }
    };

    return(
        <div className="register-page">
            <form className="register-form">
                <AlertModal show={showModal} message={modalMessage} close={closeModal} callback={modalSuccess && registerSuccess} />
                <h1>Register</h1>
                <GoogleButton location={'/register'} />
                <FacbookButton location={'/register'} />
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