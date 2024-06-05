import axios from "axios";
const movieBaseUrl= "https://api.themoviedb.org/3/"
const api_key= '8f91aaa0b4acb5672ac1d2ec8c025df3'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=8f91aaa0b4acb5672ac1d2ec8c025df3';
const getTrendingVideos=axios.get(movieBaseUrl+'/trending/all/day?api_key='+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

// https://api.themoviedb.org/3/trending/all/157336?api_key=8f91aaa0b4acb5672ac1d2ec8c025df3
// https://api.themoviedb.org/3/movie/157336/videos?api_key=8f91aaa0b4acb5672ac1d2ec8c025df3
export default{
    getTrendingVideos,
    getMovieByGenreId
}
// https://api.themoviedb.org/3/trending/all/day?api_key=8f91aaa0b4acb5672ac1d2ec8c025df3