import { storage } from '@upp/chrome/utils';
import { Candidate } from '@upp/chrome/types';
import { FormFields } from '@upp/chrome/molecules';

import { types } from '@upp/chrome/store';
import * as actions from './actions';

interface Form {
  action: string;
  expirationDate: string;
  fields?: FormFields.types.Field[];
  values?: Candidate;
}

type FormTypes = 'candidate';

export type FormsState = Record<FormTypes, Form | null>;

const initForm: FormsState = {
  candidate: null,
};

// type Action =
//   | types.BaseAction<typeof kl, FormsState>
//   // | types.BaseAction<
//   //     { key: FormTypes; [k: keyof Form]: string },
//   //     typeof actions.FORM.UPDATE
//   //   >
//   | types.BaseAction<actions.FORM.REMOVE, string>;

export const form = (
  state: FormsState = initForm,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: any // types.BaseAction<FormsState | string | Record<string, FormsState>>
) => {
  switch (type) {
    case actions.FORM.INIT:
      return payload;

    case actions.FORM.SAVE: {
      const newState = {
        ...state,
        ...payload,
      };

      storage.set(actions.FORM.id, JSON.stringify(newState));
      return newState;
    }

    case actions.FORM.UPDATE: {
      const { key, ...others } = payload || {};

      if (typeof key === 'string') {
        const newState = {
          ...state,
          [key]: {
            ...(state[key as FormTypes] || {}),
            ...others,
          },
        };

        return newState;
      }

      return state;
    }

    case actions.FORM.REMOVE: {
      if (typeof payload !== 'string') {
        return state;
      }

      const newState = {
        ...state,
        [payload]: null,
      };

      storage.set(actions.FORM.id, JSON.stringify(newState));

      return newState;
    }

    default:
      return state;
  }
};

export const url = (
  state: types.State['url'] = '',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: any // types.BaseAction<types.State['url']>
) => {
  switch (type) {
    case actions.URL.INIT:
      state = payload.pathname;
      console.log('state');
      console.log(state);
      return state;

    default:
      console.log(type);
      console.log(payload);
      return state;
  }
};
