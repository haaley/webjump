import {methods} from '../core/http.core';

export const FanartEndpoint = {
  movies(id) {
    return {
      method: methods.get,
      path: `/movies/${id}?api_key=c86879b994d0f7aae686b59861c24840`,
    };
  },
};
