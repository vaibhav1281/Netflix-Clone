import React from 'react'
import MovieList from './movieLists/MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  
  return (
    <div className='bg-black'>
      <div className='-mt-52 max-sm:mt-0 md:mt-0 z-20 relative '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer