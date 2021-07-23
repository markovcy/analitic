import {
  authActions,
  formActions,
  urlActions,
  navigationActions,
} from '@upp/chrome/modules';

export const actions = {
  ...authActions,
  ...formActions,
  ...urlActions,
  ...navigationActions,
};
