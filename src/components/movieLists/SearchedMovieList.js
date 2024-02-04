import React from 'react'
import SearchedMovieListCard from './SearchedMovieListCard';

const SearchedMovieList = ({searchedMovieList}) => {
  return (
    <div className='w-full h-screen overflow-scroll no-scrollbar space-y-4'>
        {
            searchedMovieList && Array.isArray(searchedMovieList) &&
            (
                searchedMovieList.map((searchedMovieList) => 
                    <SearchedMovieListCard
                        key={searchedMovieList.id}
                        title={searchedMovieList?.title}
                        posterPath={searchedMovieList?.poster_path}
                        releaseDate={searchedMovieList?.release_date}
                        overview={searchedMovieList?.overview}
                        vote={searchedMovieList?.vote_average}
                        genreId={searchedMovieList?.genre_ids}
                    />
                )
            )
        }
    </div>
  )
}

export default SearchedMovieList