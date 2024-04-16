import { reactive } from 'vue';

export const store = reactive ({
    API_KEY: 'f8ca6616a1fe0e3970340e21271f15ba',
    API_MOVIE:'https://api.themoviedb.org/3/search/movie',
    API_TV: 'https://api.themoviedb.org/3/search/tv',
    searchBarValue: '',
    searchedMovies: [],
    searchedTv: [],
    searchedMoviesVotes: [],
    imgUrlBase: 'https://image.tmdb.org/t/p/w342'
})