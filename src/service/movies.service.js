import {requestTraktApi} from '../api/trakt';
import {MoviesEndpoint} from '../api/endpoints/movies';

const MoviesService = {
  getTrendingMovies: async () => {
    const {data} = await requestTraktApi(MoviesEndpoint.trending());
    return data;
  },
  getPopularMovies: async () => {
    const {data} = await requestTraktApi(MoviesEndpoint.popular());
    return data;
  },
};

export default MoviesService;
