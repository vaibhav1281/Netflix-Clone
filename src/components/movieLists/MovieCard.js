import React from 'react'
import { IMAGE_CDN_URL } from "../../utils/constant"

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 hover:scale-125 transition-transform duration-200 ease-in-out'>
        <img
         className='rounded-xl'
         alt='movie card'
         src={IMAGE_CDN_URL+posterPath}
        />
    </div>
  )
}

export default MovieCard