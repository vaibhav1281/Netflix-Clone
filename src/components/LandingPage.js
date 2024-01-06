import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { IN_BACKGROUND_CDN } from '../utils/constant'
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import video1 from '../assets/video-tv.m4v' 
import { TV } from '../assets/assets'


export const LandingPage = () => {
  return (
    <div className='relative w-full'>
        <div className="absolute inset-0 bg-gradient-to-top h-[700px]"></div>
        <Header/>
        <div className='space-y-2 bg-black bg-opacity-80'>
            <section className='w-full'>
                {/* background image */}
                <div className=''>
                    <img alt='IN_BACKGROUND' src={IN_BACKGROUND_CDN}
                        className='h-[700px] w-full object-cover'
                    />
                </div>

                {/* Overlapping div */}
                <div className='absolute top-0 left-0 w-full h-[700px] flex flex-col items-center justify-center text-white'>
                    {/* texts */}
                    <div className='text-center'>
                        <h1 className='text-4xl font-black'>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
                        <p className='text-xl mt-4'>Watch anywhere. Cancel anytime.</p>
                    </div>
                    {/* form */}
                    <form className='mt-8'>
                        <div className='flex justify-center flex-col items-center'>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div>
                                <input className='border p-2 mr-2' placeholder='email'/>
                                <button className='p-2 bg-netflix-red'>
                                    <Link className='flex items-center'>
                                        Get Started 
                                        <span>
                                            <ChevronRightIcon className='w-4 h-4'/>
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            
            <section className='w-full h-[640px] bg-black'></section>
        </div>
    </div>
  )
}
