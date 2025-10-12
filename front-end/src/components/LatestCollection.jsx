import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
/*Imports the ShopContext object that you created (in the ShopContextProvider file).
 This is the key used by useContext to identify the data source. */
import Title from './Title';/*Imports the reusable Title component you defined earlier,
 which handles the styling for the section heading. */

const LatestCollection = () => {
    /*Defines the functional component named LatestCollection. */
 
 const { products} = useContext(ShopContext);//This is the core logic for data access:
       /*Uses object destructuring to pull only the products array out of the large context value 
       (which also contains the cart state, functions, currency, etc.). */
    return (//Starts the function's return block, containing the JSX to be rendered.
    
        /*Renders the imported Title component, 
        passing two specific strings as props: */
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        
        <Title text1={'LATEST'} text2={'COLLECTION'}/>

      </div>
    </div>
  )
}

export default LatestCollection
