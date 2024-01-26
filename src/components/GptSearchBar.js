import React from 'react'
import language from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang) // default to english if not provided by user
  return (
    <div className='w-full h-screen overflow-hidden'>
      <form className='pt-[10%] max-sm:pt-[30%] max-md:pt-[20%] flex gap-4 justify-center items-center'>
        <input
         type="text"
          placeholder={language[languageKey].placeholder}
          className='py-2 px-4 rounded-full w-[30%] max-sm:w-[60%] max-md:w-[60%] outline-none'
        />
        <button
          className='bg-netflix-red py-2 px-4 rounded-full text-white'>
          {language[languageKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar