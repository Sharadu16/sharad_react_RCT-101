import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider =({children}) => {
   
    const [isAuthorized, setIsAuthorized] = useState(false);

    const login = (userName, password) => {
        if(userName && password)
        {
            setIsAuthorized(true);
        }
    }

    const logOut = () => {
       setIsAuthorized(false);
    }

    return <AuthContext.Provider value={{isAuthorized, login, logOut}}>{children}</AuthContext.Provider>
}