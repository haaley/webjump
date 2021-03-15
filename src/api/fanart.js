import axios from 'axios';

const apiFanart = axios.create({
  baseURL: 'http://webservice.fanart.tv/v3/',
});

/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestFanartApi = async config => {
  const {data, path, headers, params, method, responseType} = config;
  const requestPromise = data
    ? apiFanart?.[method.toLowerCase()](path, data, {
        headers,
        params,
        responseType,
      })
    : apiFanart?.[method.toLowerCase()](path, {
        headers,
        params,
        responseType,
      });

  return requestPromise;
};
