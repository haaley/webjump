import {methods} from '../core/http.core';

export const MoviesEndpoint = {
  trending() {
    return {
      method: methods.get,
      path: '/movies/trending',
    };
  },
};
