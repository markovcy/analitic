import {
  authActions,
  formActions,
  navigationActions,
} from '@upp/chrome/modules';

export const actions = {
  ...authActions,
  ...formActions,
  ...navigationActions,
};
