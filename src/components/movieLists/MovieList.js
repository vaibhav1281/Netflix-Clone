import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({title, movies}) => {
  return (
    <div>

      <h1 className='text-white ml-9 text-3xl font-bold'>{title}</h1>

      <div className='flex overflow-x-scroll no-scrollbar overflow-y-hidden'>
        <div className='flex space-x-6 my-9 ml-9'>
          { 
            movies && Array.isArray(movies) && 
            (
              movies.map((movie) => (
                <Link
                  to={"/browse/movie/" + movie.id}
                  key={movie.id}
                >
                  <MovieCard  posterPath={movie.poster_path}/>
                </Link>
              ) 
              )
            ) 
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList