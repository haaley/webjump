import axios from 'axios';

const DefaultHeaders = {
  'Content-Type': 'application/json',
  'trakt-api-version': 2,
  'trakt-api-key':
    'bbaa3ddd9755b302379f49452b048ad717bf347b0419b0c3346ecf2b7b57294f',
};

const apiTrakt = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: DefaultHeaders,
});

/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestTraktApi = async config => {
  const {data, path, headers, params, method, responseType} = config;
  const requestPromise = data
    ? apiTrakt?.[method.toLowerCase()](path, data, {
        headers,
        params,
        responseType,
      })
    : apiTrakt?.[method.toLowerCase()](path, {
        headers,
        params,
        responseType,
      });

  return requestPromise;
};
