/*This code sets up the React Context for your entire e-commerce shop.
It's the central hub for managing your product data and, 
most importantly, the state of your user's shopping cart. */

import { createContext } from 'react'
import {products} from "../assets/assets"

export const ShopContext = createContext();

/*
import { createContext, useState } from 'react': ,
Imports the necessary hooks from React.
createContext is used to create the context object itself.
useState is used to manage the dynamic state of the shopping cart.
import { products } from "../assets/assets": Imports your product list, 
likely an array of product objects, which is defined in your local assets.js file.
export const ShopContext = createContext(): Creates the actual Context object. Components will use this object with the useContext hook to access the shop data and functions.
*/

const ShopContextProvider =(props) =>{
      const currency = 'kes';
      const delivery_fee = 10;

    
    const value = {
          products, currency, delivery_fee
      }
       return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>
       )
        
}
export default ShopContextProvider