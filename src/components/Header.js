import React from 'react'
import { LOGO_CDN } from '../utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-24 absolute '>
        <div className='w-9/12 lg:w-9/12 max-sm:w-11/12 md:w-10/12 flex justify-between items-center mx-auto'>
            {/* logo */}
           <div>
            <img src={LOGO_CDN} alt='logo' className='w-40'/>
           </div>
            {/* lang & Sign In/Up */}
           <div className='flex items-center gap-4 text-white'>
                <div className='flex  items-center p-1 border bg-transparent rounded-md'>
                    <span className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                        </svg>

                    </span>
                    {/* language select */}
                    <select className='outline-none bg-transparent '>
                        <option>English</option>
                        <option>हिंदी</option>
                    </select>
                </div>
                <div className='bg-red-700 py-1 px-2 rounded-md'>
                    <button>
                        <Link to={'/login'}>Sign In</Link>
                    </button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Header