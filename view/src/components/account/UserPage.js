import { useCallback, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import apiAccount from "../../utilities/api/apiAccount"
import { Cart } from "../cart/Cart";
import { AlertModal } from "../Modal/AlertModal";
import { EmailInput } from "./inputs/EmailInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { PasswordInput } from "./inputs/PasswordInput";


export function UserPage({user, updateUser}) {

    const [currentUser, setcurrentUser] = useState({id:'', first_name:'', last_name:'', email:'', password:'', created:'', modified:''});
    const [userUpdates, setUserUpdates] = useState({});
    const [updateLocks, setUpdateLocks] = useState({first_name:true, last_name:true, email:true, password:true});
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setcurrentUser(user);
    },[user]);
    
    const updateUserInfo = (input, value) => {
        setcurrentUser((prev) => ({
            ...prev,
            [input]: value
        }));
        setUserUpdates((prev) => ({
            ...prev,
            [input]: value
        }));
    };

    const toggleUpdate = (input) => {
        let newState = updateLocks[input] === true ? false : true;
        setUpdateLocks((prev) => ({
            ...prev,
            [input]: newState
        }))
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    const submitUpdates = async (e) => {
        e.preventDefault();
        const res = await updateUser(userUpdates);
        if (res.status === 400) {
            setModalMessage(res);
            setShowModal(true);
        } else {
            setModalMessage(res.message);
            setShowModal(true);
            setUpdateLocks({first_name:true, last_name:true, email:true, password:true});
        }
    };

    return(
        <div>
            <h1>Hello {user.first_name}</h1>
            <form className='user-page-form'>
                <AlertModal show={showModal} close={closeModal} modalMessage={modalMessage} />
                <FirstNameInput firstname={currentUser.first_name} updateFunction={updateUserInfo} updateLocked={updateLocks.first_name} toggleUpdate={toggleUpdate} />
                <LastNameInput lastname={currentUser.last_name} updateFunction={updateUserInfo} updateLocked={updateLocks.last_name} toggleUpdate={toggleUpdate} />
                <EmailInput email={currentUser.email} updateFunction={updateUserInfo} updateLocked={updateLocks.email} toggleUpdate={toggleUpdate} />
                <PasswordInput password={currentUser.password} updateFunction={updateUserInfo} updateLocked={updateLocks.password} toggleUpdate={toggleUpdate} />
                <button className="submit-btn" onClick={submitUpdates}>Submit Updates</button>
            </form>
            <ul className="user-links">
                <li><Link to='#'>View Cart</Link></li>
                <li><Link to='#'>View Orders</Link></li>
                <li><Link to='#'>Delete Account</Link></li>
                <li><Link to='#'>Log Out</Link></li>
            </ul>
            <Routes>
                <Route path='/user/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}