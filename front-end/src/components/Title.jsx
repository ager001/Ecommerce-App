import React from 'react'

const Title = ({text1, text2}) => {
    /*Defines a functional component named Title. It uses destructuring to immediately extract two props 
    (text1 and text2) passed down from its parent component. */
  return (
    /*Starts the function's return block, which contains the JSX 
    (HTML-like syntax) that will be rendered to the DOM. */
    
    /*The main container div for the title element. */
    <div className='inline-flex gap-2 items-center mb-3'>
    
        <p className='text-gray-500'/*Defines the first text paragraph, 
        which holds the primary section title. */>
            
            {text1} <span className='text-gray-700 font-medium'>
            {text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' /*Defines the small horizontal line 
        that appears next to the title. */></p>
      
    </div>
    
  )
}

export default Title
