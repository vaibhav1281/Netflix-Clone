import React from 'react'
import { LOGO_CDN } from '../utils/constant'
import { Link } from 'react-router-dom'
import { LanguageIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='w-full h-24 absolute z-20'>
        <div className='w-9/12 lg:w-9/12 max-sm:w-11/12 md:w-10/12 flex justify-between items-center mx-auto'>
            {/* logo */}
           <div>
            <img src={LOGO_CDN} alt='logo' className='w-40'/>
           </div>
            {/* lang & Sign In/Up */}
           <div className='flex items-center gap-4 text-white'>
                <div className='flex  items-center p-1 border bg-transparent rounded-md'>
                    <span className=''>
                        <LanguageIcon className='w-4 h-4'/>
                    </span>
                    {/* language select */}
                    <select className='outline-none bg-transparent w-full'>
                        <option className='text-black'>English</option>
                        <option className='text-black'>हिंदी</option>
                    </select>
                </div>
                <div className='bg-netflix-red py-1 px-2 rounded-md'>
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