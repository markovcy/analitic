import { useMemo } from 'react';

import applyCaseMiddleware from 'axios-case-converter';
import axiosInstance, { AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  Options,
  makeUseAxios,
  ResponseValues,
  RefetchOptions,
} from 'axios-hooks';

const { REACT_APP_API_ENDPOINT } = process.env;

export const axios = applyCaseMiddleware(
  axiosInstance.create({
    timeout: 30000,
    baseURL: REACT_APP_API_ENDPOINT,
  }),
  {
    preservedKeys: (input: string) =>
      input.includes('-') || input.includes(' '),
    caseFunctions: {
      // overrides change-case to only replace words like `one_two`
      camel: (input: string) =>
        input.replace(/([_][a-z])/gi, ($1) =>
          $1.toUpperCase().replace('_', '')
        ),
    },
  }
);

axios.interceptors.response.use((response) => {
  if (response.status === 204) {
    return {
      ...response,
      data: undefined,
    };
  }

  return response;
});

export const useAxiosDefault = makeUseAxios({
  axios,
  cache: false,
});

// recall requests when changed language
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAxios = <T = any, TError = any>(
  config: AxiosRequestConfig | string,
  options?: Options & {
    disablePreservedKeys?: boolean;
  }
): [
  ResponseValues<T, TError>,
  (config?: AxiosRequestConfig, options?: RefetchOptions) => AxiosPromise<T>,
  () => void
] => {
  const { disablePreservedKeys, ...otherOptions } = options || {};
  let newOptions = config;

  const url = useMemo(
    () => (typeof config === 'string' ? config : config.url),
    [config]
  );

  if (disablePreservedKeys) {
    if (typeof newOptions === 'object') {
      newOptions.transformResponse = axiosInstance.defaults.transformResponse;
    } else {
      newOptions = {
        url,
        transformResponse: axiosInstance.defaults.transformResponse,
      };
    }
  }

  const [data, execute, cancel] = useAxiosDefault<T>(newOptions, otherOptions);

  return [data, execute, cancel];
};
