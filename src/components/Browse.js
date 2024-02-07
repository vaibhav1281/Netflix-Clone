import React, { useEffect, useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Netflix_Logo_Animation from '../assets/netflix_logo_animation.mp4'

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // 6000 milliseconds = 4 seconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, [ setShow]);

  return show ? (
    <div className='w-full min-h-screen bg-black flex justify-center align-middle'>
      <video autoplay="true" muted="true">
        <source className='w-full min-h-screen' src={Netflix_Logo_Animation} type="video/mp4"/>
      </video>
    </div>
  ) : (
    <div>
      <Header/>
      {showGptSearch ? (
          <>
            <GptSearch />
          </>
        ) : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
          )
      }  
    </div>
  )
}

export default Browse