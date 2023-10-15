import React, { createContext, useContext, useState } from 'react'
import { PRODUCTS } from '../products';


export const shopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for(let i= 1; i <PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
  return cart;
};
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getSousTotal = () =>{
        let total = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) =>product.id === Number(item));
                total += cartItems[item] * itemInfo.price
            }
        }
        return total;
    }
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    };
    const updateCart = (newAmount,itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCart, getSousTotal};
      return(
            <shopContext.Provider value={contextValue}>
                {props.children}
            </shopContext.Provider>
            );
    
    };