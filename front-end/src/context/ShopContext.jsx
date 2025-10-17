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
export const ShopContext = createContext(): Creates the actual Context object. 
Components will use this object with the useContext hook to access the shop data and functions.
*/

const ShopContextProvider =(props) =>{
  /*- ✅ Declares a functional component named ShopContextProvider.
- It receives props, which typically includes children — the nested components 
that will consume the context.
 */
      const currency = 'kes';//- ✅ Defines a constant currency with the value 'kes' (Kenyan Shilling).
//- This will be shared via context to any component that needs to know the currency format.

      const delivery_fee = 10;

    
    const value = {
          products, currency, delivery_fee
      }/*- ✅ Creates an object value that bundles together:
- products: ⚠️ This variable is not declared in this snippet — it must be defined or imported elsewhere.
- currency and delivery_fee: the constants defined above.
- This value object will be passed to the context provider.
 */
       return(
        <ShopContext.Provider value={value}>
           {/*- ✅ Wraps child components in ShopContext.Provider.
- This makes the value object available to any nested component that uses useContext(ShopContext).
 */}
          {props.children}
          {/*- ✅ Renders whatever components are nested inside ShopContextProvider.
- These children will have access to the context values (products, currency, delivery_fee).
 */}
        </ShopContext.Provider>
       )
        
}
export default ShopContextProvider