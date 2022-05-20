import { createContext, useState } from "react";
import apiAccount from "../../utilities/api/apiAccount";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

    const loadUser = async () => {
        const loadedUser = await apiAccount.fetchUser();
        if(loadedUser.status){
            return false;
        } else {
            setUser(loadUser);
            return true;
        }
    };
    
    const updateUser = async (updatesObject) => {
      const response = await apiAccount.updateUser(updatesObject);
      if(response.status === 200) {
        let updatedUser = await apiAccount.fetchUser();
        setUser(updatedUser);
      } else {
        return response;
      }
    };

    const deleteAccount = async () => {
        await apiAccount.deleteAccount();
        setUser({});        
    };

    return (
        <UserContext.Provider value={{user: user, load: loadUser, update: updateUser, delete: deleteAccount}}>
            {children}
        </UserContext.Provider>
    )
};
