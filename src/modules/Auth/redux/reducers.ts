import { axios } from '@upp/chrome/utils';
import { store, types, history } from '@upp/chrome/store';

import * as actions from './actions';

const userFromLocalStorage = localStorage.getItem(actions.USER.id);

const userData = (userFromLocalStorage
  ? JSON.parse(userFromLocalStorage)
  : null) as types.State['user'];

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      const { pathname, search } = window.location;

      if (!pathname.includes('/office/signin')) {
        history.replace(`/signin?redirectUrl=${pathname}${search}`);
      }

      if (store) {
        store.dispatch(actions.user.remove());
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

if (userData?.accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${userData?.accessToken}`;
}

export const user = (
  state: types.State['user'] = userData,
  { type, payload }: types.BaseAction<types.State['user']>
) => {
  switch (type) {
    case actions.USER.SAVE: {
      localStorage.setItem(actions.USER.id, JSON.stringify(payload?.user));
      axios.defaults.headers.common.Authorization = `Bearer ${payload?.user?.accessToken}`;

      return {
        ...state,
        ...payload?.user,
      };
    }

    case actions.USER.REMOVE: {
      localStorage.removeItem(actions.USER.id);
      delete axios.defaults.headers.common.Authorization;

      return null;
    }

    default:
      return state;
  }
};
