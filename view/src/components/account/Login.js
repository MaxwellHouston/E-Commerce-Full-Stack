import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAccount from "../../utilities/api/apiAccount";
import { AlertModal } from "../Modal/AlertModal";
import { FacbookButton } from "./FacebookButton";
import { GoogleButton } from "./GoogleButton";
import { EmailInput } from "./inputs/EmailInput";
import { PasswordInput } from "./inputs/PasswordInput";

export function Login (){

    const [newLogin, setNewLogin] = useState({email:'', password:''});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalSuccess, setModalSuccess] = useState(false);

    const navigate = useNavigate();

    const updateNewLogin = (input, value) => {
        setNewLogin((prev) => ({
            ...prev,
            [input]: value
        }))
    }; 

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    const loginSuccess = () => {
        navigate('/user');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await apiAccount.login(newLogin);
        if(res.status === 400){
            if(res.data.name){
                setModalMessage(res.data.details.body[0].message);
                setShowModal(true);
            } else {
                setModalMessage(res.data.message);
                setShowModal(true);
            }
        } else if (res.status === 401){
            setModalMessage('Email/Password are incorrect')
            setShowModal(true);
        } else if (res.status === 200){
            setModalMessage(res.data.message);
            setModalSuccess(true);
            setShowModal(true);
        } else {
            setModalMessage('Something went wrong. Please try again.');
            setShowModal(true); 
        }
    }                                                             

    return(
        <div className="login-page">
            <form className="login-form">
                <AlertModal show={showModal} message={modalMessage} close={closeModal} callback={modalSuccess && loginSuccess} />
                <h1>Login</h1>
                <GoogleButton location={'/login'} />
                <FacbookButton location={'/login'} />
                <p className="or-divider"><span>Or</span></p>
                <EmailInput updateNewLogin={updateNewLogin} email={newLogin.email} />
                <PasswordInput updateNewLogin={updateNewLogin} password={newLogin.password} />
                <button onClick={handleSubmit} type="submit" className="submit-btn">Login</button>
                <p>No account? <Link to='/register' >Register Here</Link></p>               
            </form>
        </div>
    )
}