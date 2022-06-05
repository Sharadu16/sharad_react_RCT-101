import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const {isAuthorized} = useContext(AuthContext);

    const addToCart = () => {
    setCount(count+1)
    }

    const buy = () => {
        if(isAuthorized){
            console.log("Can buy")
        }else{
            console.log("Can not buy")
        }
    }

    return <CartContext.Provider value={{count,addToCart,buy}}>{children}</CartContext.Provider>
}