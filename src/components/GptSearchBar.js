import React, { useEffect, useRef } from 'react'
import language from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { showSearchedMovies } from '../redux/searchSlice';
import SearchedMovieList from './movieLists/SearchedMovieList';

const GptSearchBar = () => {

  const dispatch = useDispatch()
  const searchedMovies = useSelector(store => store.search.showSearch)

  const languageKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () =>{
    const data = await  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText?.current?.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json()
    dispatch(showSearchedMovies(json.results))
  }
  useEffect(() =>{
    handleGptSearchClick();
  },[])

  return (
    <div className='w-full h-screen overflow-hidden'>
      <form
       onSubmit={(e)=>e.preventDefault()}
       className='pt-[10%] max-sm:pt-[30%] max-md:pt-[20%] flex gap-4 justify-center items-center'>
        <input
          ref={searchText} 
          type="text"
          placeholder={language[languageKey].placeholder}
          className='py-2 px-4 rounded-full w-[30%] max-sm:w-[60%] max-md:w-[60%] outline-none'
        />
        <button onClick={handleGptSearchClick}
          className='bg-netflix-red py-2 px-4 rounded-full text-white'>
          {language[languageKey].search}
        </button>
      </form>
      <div>
        <SearchedMovieList searchedMovieList = {searchedMovies}/>
      </div>
    </div>
  )
}

export default GptSearchBar