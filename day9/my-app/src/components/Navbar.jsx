import React, {useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import Wishlist from './Wishlist'

const Navbar = () => {
    const {isAuthorized, login,logOut} = useContext(AuthContext);
    const {buy} = useContext(CartContext);
    const {isLight, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
       Navbar
       <button onClick={() => {
           if(isAuthorized){
               logOut();
           }else{
               login("R", "Z");
           }
       }}
       >
         { isAuthorized ? "logOut" : "login"}
       </button>
       <button onClick={buy}>Buy</button>
       <button onClick={toggleTheme}>{`make ${isLight ? "dark" : "light"}`}</button>
      {isAuthorized && <Wishlist/>}
    </div>
  )
}

export default Navbar