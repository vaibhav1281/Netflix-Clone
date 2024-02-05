import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMoviesTrailer = (movieID) => {

    const dispatch = useDispatch();
    const  movieTrailer = useSelector((store) => store.movies.movieTrailer)
  
    const getMovieVideos = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const filterTrailer = json.results.filter(video => video.type === "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0] ;
        dispatch(addMovieTrailer(trailer))
      }
    
      useEffect(() => {
        if(!movieTrailer) getMovieVideos() // Or we can write this as : !movieTrailer &&  getMovieVideos()
      },[])
}

export default useMoviesTrailer