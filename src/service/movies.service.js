import {requestTraktApi} from '../api/trakt';
import {MoviesEndpoint} from '../api/endpoints/movies';

const MoviesService = {
  getTrendingMovies: async () => {
    const {data} = await requestTraktApi(MoviesEndpoint.trending());
    return data;
  },
};

export default MoviesService;
