import { reducer } from 'redux-burger-menu';

const isDev = process.env.NODE_ENV === 'development';

const initState = {
  isOpen: isDev,
};

export const burgerMenu = (
  state: Parameters<typeof reducer>[0] = initState,
  action: Parameters<typeof reducer>[1]
) => {
  switch (action.type) {
    default:
      return reducer(state, action);
  }
};
