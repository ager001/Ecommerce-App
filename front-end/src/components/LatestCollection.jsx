import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
/*Imports the ShopContext object that you created (in the ShopContextProvider file).
 This is the key used by useContext to identify the data source. */
import Title from './Title';/*Imports the reusable Title component you defined earlier,
 which handles the styling for the section heading. */
import ProductItem from './ProductItem';

const LatestCollection = () => {
    /*Defines the functional component named LatestCollection. */
 
 const { products} = useContext(ShopContext);//This is the core logic for data access:
       /*Uses object destructuring to pull only the products array out of the large context value 
       (which also contains the cart state, functions, currency, etc.). */
 const [latestProducts, setLatestProducts] = useState([]);

 useEffect(()=>{
      setLatestProducts(products.slice(0, 10))
 },[products])
   
       return (//Starts the function's return block, containing the JSX to be rendered.
    
        /*Renders the imported Title component, 
        passing two specific strings as props: */
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Welcome to our online shoe collection store. We have all latest designer shoes
        </p>

      </div>
       {/*Rendering products */}
       <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {
          latestProducts.map((item, index)=>(
             <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
         }
       </div>
          
    </div>
  )
}

export default LatestCollection
