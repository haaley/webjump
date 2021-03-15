import {requestFanartApi} from '../api/fanart';
import {FanartEndpoint} from '../api/endpoints/fanart';

const FanartService = {
  getMoviePosterImage: async id => {
    const {data} = await requestFanartApi(FanartEndpoint.movies(id));
    return data.movieposter[0].url;
  },
};

export default FanartService;
