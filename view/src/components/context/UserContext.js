import { createContext, useCallback, useState } from "react";
import apiAccount from "../../utilities/api/apiAccount";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

    const loadUser = useCallback( 
        async () => {
            const loadedUser = await apiAccount.fetchUser();
            console.error('test')
            if(loadedUser.status){
                return false;
            } else {
                setUser(loadedUser);
                return true;
            }
        },[]
    );
    
    const updateUser = async (updatesObject) => {
      const response = await apiAccount.updateUser(updatesObject);
      if(response.status === 200) {
        loadUser();
        return response;
      } else {
        return response;
      }
    };

    const deleteUser = async () => {
        await apiAccount.deleteAccount();
        setUser({});        
    };

    const clearUser = useCallback( 
        () => {
            setUser({});
        },[]
    );

    return (
        <UserContext.Provider value={{user: user, clearUser: clearUser, load: loadUser, update: updateUser, deleteUser: deleteUser}}>
            {children}
        </UserContext.Provider>
    )
};
