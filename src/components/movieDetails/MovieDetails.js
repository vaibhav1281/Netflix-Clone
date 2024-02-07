import { useParams } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../../utils/constant";


const MovieDetails = () => {
    const movieDetail = useSelector(store => store.details.movieDetail);
    // console.log(movieDetail)
    const{movieId} = useParams();
    useMovieDetails(movieId);

    const{
        title,
        budget,
        overview,
        release_date,
        status,
        poster_path,
        genres,
        tagline,
        runtime,
        revenue,
    } = movieDetail;

    // if(movieDetail == null){
    //     return(
    //         <div>
    //             <ShimmerUI/>
    //         </div>
    //     )
    // }

  return (
    <div className="bg-black w-full min-h-screen p-4 md:p-8">
        <div 
            onClick={()=>window.history.go(-1)}
            className="block md:hidden w-14"  
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-1w-12 text-netflix-red inline-flex">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
            </svg>

        </div> 

        <div className="flex max-sm:flex-col w-11/12 justify-between mx-auto max-sm:items-center max-sm:space-y-8">
            <div className="flex md:flex-row  max-sm:flex-col w-8/12 max-sm:w-full space-x-8 max-sm:space-x-0 max-sm:items-center">
                <img 
                    src={IMAGE_CDN_URL+poster_path} 
                    alt={title}
                    className="w-60 h-96 rounded-xl max-sm:mt-6"
                />
                <div className="text-white md:mt-10 space-y-2  max-sm:space-y-8 flex md:flex-col max-sm:flex-col max-sm:text-center">
                    <h1 className="text-5xl  max-sm:text-3xl font-semibold mt-2 max-sm:text-center">{title}</h1>
                    <h4 className="text-lg">{tagline}</h4>
                    <p className="text-base leading-tight font-normal max-sm:h-20 max-sm:text-left max-sm:overflow-scroll  max-sm:text-xl">{overview}</p>
                </div>
            </div>
            <div className="text-white text-lg max-sm:text-xl w-3/12 max-sm:w-full flex flex-col space-y-4  m-2 max-sm:text-left md:border-l-2 md: border-netflix-red md:pl-11 max-sm:border-t-2 max-sm:pt-4">
                <h4 className="md:mt-10"><span className="font-semibold text-xl">Status :</span> {status}</h4>
                <h4><span className="font-semibold text-xl">Release Date :</span> {release_date}</h4>
                <h4><span className="font-semibold text-xl">Length :</span> {Math.floor(runtime/60)}Hr {Math.floor(runtime%60)}Min</h4>
                <h4><span className="font-semibold text-xl">Budget :</span> $ {budget}</h4>
                <h4><span className="font-semibold text-xl">Revenue :</span> $ {revenue}</h4>
                {/*map  genre here */}
                <div className="space-x-2 space-y-2 text-base">
                    {
                        genres && Array.isArray(genres) && (
                            genres.map((genre) => (
                                <div className="border inline-flex box-border rounded-full px-2 py-1 bg-gray-500">{genre.name}</div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails