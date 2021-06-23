import { reducer } from 'redux-burger-menu';
import { history } from '@upp/chrome/store';

const isDev = process.env.NODE_ENV === 'development';

const initState = {
  isOpen: isDev,
};

let prevPathName = window.location.pathname;

// need to observe changing routes in linkedin
window.addEventListener(
  'click',
  () => {
    [500, 1000, 2000, 4000, 8000].forEach((time) =>
      setTimeout(() => {
        if (prevPathName !== window.location.pathname) {
          history.replace(window.location.pathname);
          prevPathName = window.location.pathname;
        }
      }, time)
    );
  },
  false
);

export const burgerMenu = (
  state: Parameters<typeof reducer>[0] = initState,
  action: Parameters<typeof reducer>[1]
) => {
  switch (action.type) {
    default:
      return reducer(state, action);
  }
};
