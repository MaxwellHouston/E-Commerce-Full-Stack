import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiAccount from "../../utilities/api/apiAccount"


export function UserPage() {

    const [user, setUser] = useState({});
    
    const navigate = useNavigate();
    const location = useLocation();

    const loadUser = useCallback( async () => {
        const res = await apiAccount.fetchUser();
        if(res.status === 400){
            console.log(res.data.message);
            navigate(location.state);
            
        } else{
            setUser(res);
        }
    },[navigate, location.state])

    useEffect(() => {
        loadUser();
    },[loadUser]);

    return(
        <div>
            <h1>{user.first_name + ' ' + user.last_name}</h1>
        </div>
    )
}