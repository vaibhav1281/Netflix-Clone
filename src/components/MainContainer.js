import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import BackgroungVideo from './BackgroungVideo'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    // if(movies === null) return;
    if(!movies) return;

    const mainMovie = movies[0]

    const {overview, original_title, id} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <BackgroungVideo movieID={id}/>
    </div>
  )
}

export default MainContainer