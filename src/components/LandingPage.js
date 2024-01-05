import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { IN_BACKGROUND_CDN } from '../utils/constant'

export const LandingPage = () => {
  return (
    <div className='w-full'>
    <div className="absolute inset-0 bg-gradient-to-top h-[750px]"></div>
        <Header/>
        <div>
            <section className='w-full'>
            
                {/* backgroung image */}
                <div>
                    <img alt='IN_BACKGROUND' src={IN_BACKGROUND_CDN}
                        className='h-[750px] w-full object-cover'
                    />
                    
                </div>
                {/* texts */}
                <div></div>
                {/* form */}
                <form className=''>
                    <div></div>
                    <div>
                        <input placeholder='email'/>
                        <button>
                            <Link>
                                Get Staeted 
                                <span>  </span>
                            </Link>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}
