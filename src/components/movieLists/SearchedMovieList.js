import React from 'react'
import SearchedMovieListCard from './SearchedMovieListCard';
import { Link } from 'react-router-dom';

const SearchedMovieList = ({searchedMovieList}) => {
  return (
    <div className='w-full h-screen overflow-scroll no-scrollbar space-y-4'>
        {
            searchedMovieList && Array.isArray(searchedMovieList) &&
            (
                searchedMovieList.map((searchedMovieList) => 
                    <Link to={"/browse/movie/" + searchedMovieList.id} key={searchedMovieList.id}>
                        <SearchedMovieListCard
                            key={searchedMovieList.id}
                            title={searchedMovieList?.title}
                            posterPath={searchedMovieList?.poster_path}
                            releaseDate={searchedMovieList?.release_date}
                            overview={searchedMovieList?.overview}
                            vote={searchedMovieList?.vote_average}
                            genreId={searchedMovieList?.genre_ids}
                        />
                    </Link>
                )
            )
        }
    </div>
  )
}

export default SearchedMovieList