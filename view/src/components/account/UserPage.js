import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AlertModal } from "../Modal/AlertModal";
import { EmailInput } from "./inputs/EmailInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { PasswordInput } from "./inputs/PasswordInput";

export function UserPage() {

    const [userUpdates, setUserUpdates] = useState({});
    const [updateLocks, setUpdateLocks] = useState({first_name:true, last_name:true, email:true, password:true});
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const { user, update } = useContext(UserContext);

    const updateUserInfo = (input, value) => {
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
        const res = await update(userUpdates);
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
        <div className="account-container">
            <h1>{`${user.first_name || 'User'}'s Account`}</h1>
            <form className='user-page-form'>
                <AlertModal show={showModal} close={closeModal} modalMessage={modalMessage} />
                <FirstNameInput firstname={userUpdates.first_name || user.first_name} updateFunction={updateUserInfo} updateLocked={updateLocks.first_name} toggleUpdate={toggleUpdate} />
                <LastNameInput lastname={userUpdates.last_name || user.last_name} updateFunction={updateUserInfo} updateLocked={updateLocks.last_name} toggleUpdate={toggleUpdate} />
                <EmailInput email={userUpdates.email || user.email} updateFunction={updateUserInfo} updateLocked={updateLocks.email} toggleUpdate={toggleUpdate} />
                <PasswordInput password={userUpdates.password || user.password} updateFunction={updateUserInfo} updateLocked={updateLocks.password} toggleUpdate={toggleUpdate} />
                <button className="submit-btn" onClick={submitUpdates}>Submit Updates</button>
            </form>
            <p className="or-divider"></p>
            <ul className="user-links">
                <li><Link to='/account/cart'>View Cart</Link></li>
                <li><Link to='/account/addresses'>View Addresses</Link></li>
                <li><Link to='/account/orders'>View Orders</Link></li>
                <li><Link to='/account/delete-account'>Delete Account</Link></li>
                <li><Link to='/logout'>Log Out</Link></li>
            </ul>
        </div>
    )
}