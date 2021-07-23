import * as actions from './actions';
import * as reducers from './reducers';

export const formActions = {
  form: actions.form,
};

export const urlActions = {
  url: actions.url,
};

export const formConstants = {
  FORM: actions.FORM,
};
export const formReducers = reducers;
export type FormState = reducers.FormsState;
