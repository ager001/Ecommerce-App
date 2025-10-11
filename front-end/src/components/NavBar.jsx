import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo1} alt="Logo" className='w-50 bg-current border-none' />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-amber-900 hidden' />

                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-amber-900 hidden' />

                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-amber-900 hidden' />

                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1 pr-25'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-amber-900 hidden' />

                </NavLink>

            </ul>
            <div className='flex items-center gap-6 pr-15'>
                <img src={assets.search_icon} alt="" className='w-5 cursor-pointer'/>
                <div className='group relative '>
                   <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer ' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                             <p></p>
                             <p></p>
                             <p></p>
                        </div>
                    </div>
                      
                </div>

            </div>

        </div>
    )
}

export default NavBar
