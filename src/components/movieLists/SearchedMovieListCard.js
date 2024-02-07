import { IMAGE_CDN_URL } from "../../utils/constant"
import { genres } from "../../utils/constant"

const SearchedMovieListCard = ({
        title,
        posterPath,
        vote,
        overview,
        releaseDate,
        genreId
    }) => {
        console.log(genreId)

        // Truncate the overview for mobile view
  const truncatedOverview = overview.length > 100 ? overview.substring(0, 50) + "..." : overview;

  return (
    <div className='flex w-full  justify-center items-center mt-4'>
        <div className="flex w-6/12 max-sm:w-10/12 h-full space-x-4">
            <img
             alt=''
             className="w-1/6 h-1/5 max-sm:w-2/6" 
             src={IMAGE_CDN_URL+posterPath}/>
            <div className='text-white space-y-2 max-sm:space-y-1'>
                {/* title */}
                <h2 className="text-lg max-sm:text-base font-semibold">{title}</h2>
                {/* overview */}
                <p className="text-gray-500 text-sm hidden md:block">{overview}</p>
                <p className="text-gray-500 text-sm block md:hidden">{truncatedOverview}</p>
                {/* relese date */}
                <div className="flex gap-2 text-sm text-gray-200">
                    <p className=''>{releaseDate}</p>
                    <div className="bg-white w-1 h-1 mt-2 rounded-full"></div>
                    {/*map  genre here */}
                    <div>
                        {genreId.map(id => genres[id]).join(', ')}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchedMovieListCard