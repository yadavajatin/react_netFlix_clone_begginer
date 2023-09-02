const API_KEY = 'd2082aaed1880c08e425c6a556b6aeb7'

const request = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/trending/all/week?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/trending/movie/day?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&with_genres=27`,
    fetchRomanceMovies:`trending/movie/day?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`/trending/movie/day?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default request