import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div>

      <h1 className='text-white ml-9 text-3xl font-bold'>{title}</h1>

      <div className='flex overflow-x-scroll no-scrollbar overflow-y-hidden'>
        <div className='flex space-x-6 my-9 ml-9'>
          { 
            movies && Array.isArray(movies) && 
            (
              movies.map((movie) => <MovieCard
                key={movie.id} 
                posterPath={movie.poster_path}/> 
              )
            ) 
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList