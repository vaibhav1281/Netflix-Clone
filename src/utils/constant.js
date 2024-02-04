export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY, 
  }
};

export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGR = [
  {
    identifire: "en",
    name: "English"
  },
  {
    identifire: "spanish",
    name: "Español"
  },
  {
    identifire: "hindi",
    name: "हिंदी"
  },
]


export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// Add your genres object here
export const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
}

 