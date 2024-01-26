import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='lg:text-5xl md:text-3xl sm:text-xl font-bold mb-4'>{title}</h1>
        <p className='py-6 text-lg lg:text-lg md:text-base sm:text-sm w-1/4 lg:w-2/4 sm:w-3/4 flex max-sm:hidden'>{overview}</p>
        <div className='flex gap-2 items-center'>
            <button className='flex bg-white font-semibold gap-1 p-1 rounded-md px-3 max-sm:px-1 text-black hover:opacity-55'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </span>
              <span className='flex items-center max-sm:hidden'>Play</span>
            </button>
            <button className='flex bg-gray-400 p-1 rounded-md font-semibold gap-1'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              </span>
              <span className='flex items-center max-sm:hidden'>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle