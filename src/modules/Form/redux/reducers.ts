import { types } from '@upp/chrome/store';
import { storage } from '@upp/chrome/utils';
import { FormFields } from '@upp/chrome/molecules';

import * as actions from './actions';

interface Form {
  action: string;
  expirationDate: string;
  fields: FormFields.types.Field[];
}

export type FormsState = Record<'candidate', Form | null>;

const initForm: FormsState = {
  candidate: null,
};

export const form = (
  state: FormsState = initForm,
  { type, payload }: types.BaseAction<FormsState | string>
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

    case actions.FORM.REMOVE: {
      if (typeof payload !== 'string') {
        return state;
      }

      const newState = {
        ...state,
        [payload]: null,
      };

      storage.set(actions.FORM.id, JSON.stringify(newState));

      return null;
    }

    default:
      return state;
  }
};
