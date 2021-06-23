import { store, types } from '@upp/chrome/store';
import { axios, storage } from '@upp/chrome/utils';

import * as actions from './actions';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      if (store) {
        store.dispatch(actions.user.remove());
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export const user = (
  state: types.State['user'] = null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: any // types.BaseAction<types.State['user']>
) => {
  switch (type) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case actions.USER.SAVE:
      storage.set(actions.USER.id, JSON.stringify(payload?.user));
    // eslint-disable-next-line no-fallthrough
    case actions.USER.INIT: {
      axios.defaults.headers.common.Authorization = `Bearer ${payload?.user?.accessToken}`;

      return {
        ...state,
        ...payload?.user,
      };
    }

    case actions.USER.REMOVE: {
      storage.remove(actions.USER.id);
      delete axios.defaults.headers.common.Authorization;

      return null;
    }

    default:
      return state;
  }
};
