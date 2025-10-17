import React, { useEffect, useState } from 'react'
/*- ✅ Imports React and two hooks:
- useEffect: for running side effects (e.g., filtering products).
- useState: for managing local component state (bestSeller).
 */
import { ShopContext } from '../context/ShopContext'
/*- ✅ Imports the ShopContext, which holds shared data (like products) 
across components using React Context API.
 */
import { useContext} from 'react'
/*- ✅ Imports useContext hook to access context values
 (like products) inside this component.
 */
import Title from './Title';
/*- ✅ Imports a reusable Title component, likely used to render styled headings like "BEST SELLERS".
 */
import ProductItem from './ProductItem';
/*- ✅ Imports a reusable ProductItem component, used to display individual product cards.
 */

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    /*- ✅ Uses useContext to extract products from ShopContext. 
    This gives access to the full product list.
 */
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        /*- ✅ Starts a useEffect hook to run logic after component mounts.
 */
         const bestProduct = products.filter((item)=>(item.bestseller))
         /*- ✅ Filters the products array to include only items where item.bestseller is truthy.
- ⚠️ Make sure the property is spelled correctly (bestseller vs bestProduct)
 */
         setBestSeller(bestProduct.slice(0,5))
         //- ✅ Updates the bestSeller state with the first 5 items from the filtered list

    },[])/*- ✅ Empty dependency array means this effect runs only once when the component mounts.
- ⚠️ If products is fetched asynchronously, consider adding [products] as a dependency.
 */


  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
       <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            The following sneakers are among our client's favourite.
        </p>
          
      </div>
      
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/*- ✅ Grid layout for product cards:
- Responsive column count from 2 to 5.
- gap-4: horizontal spacing.
- gap-y-6: vertical spacing.
 */}

        {
            bestSeller.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                /*- ✅ Renders a ProductItem with props:
- id, name, image, price — passed from each product object.
 */
            ))
        }
     </div>
          
    </div>
  )
}

export default BestSeller
