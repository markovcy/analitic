import { BurgerMenu } from 'redux-burger-menu';
import { RouterState } from 'connected-react-router';
import { FormState } from '@upp/chrome/modules';

import * as types from '@upp/chrome/types';

export const CANCEL = 'CANCEL';
export const FAILURE = 'FAILURE';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const SAVE = 'SAVE';
export const REMOVE = 'REMOVE';
export const OPEN = 'OPEN';
export const INIT = 'INIT';
export const CLOSE = 'CLOSE';

export type State = {
  router: RouterState;
  burgerMenu: BurgerMenu;
  user: types.User | null;
  form: FormState;
};

export type Types = {
  id: string;
  CANCEL: string;
  FAILURE: string;
  REQUEST: string;
  SUCCESS: string;
  SAVE: string;
  INIT: string;
  REMOVE: string;
  OPEN: string;
  CLOSE: string;
};

export interface Meta {
  id?: Types['id'];
  notification?: string | null;
  isLoading?: boolean;
  reject?: boolean;
  resolve?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseAction<T = any> {
  type: string;
  meta: Meta;
  payload?: { [key: string]: T };
}

type TActions =
  | 'cancel'
  | 'failure'
  | 'request'
  | 'success'
  | 'save'
  | 'init'
  | 'remove'
  | 'open'
  | 'close';

export type Actions = {
  [key in TActions]: (
    payload?: BaseAction['payload'],
    meta?: Meta
  ) => BaseAction;
};
