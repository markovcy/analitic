import * as actions from './types';

const TYPES = [
  actions.CANCEL,
  actions.FAILURE,
  actions.REQUEST,
  actions.SUCCESS,
  actions.SAVE,
  actions.REMOVE,
  actions.OPEN,
  actions.CLOSE,
];

export const generateActionTypes = (base: string): actions.Types => {
  const types = TYPES.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any);

  types.id = base;

  return types;
};

export const generateActions = (base: actions.Types): actions.Actions => {
  const callback = ({
    type,
    defaultMeta,
  }: {
    type: string;
    defaultMeta?: actions.Meta;
  }) => (payload: actions.BaseAction['payload'], meta?: actions.Meta) => ({
    type,
    payload,
    meta: { id: base.id, ...defaultMeta, ...meta },
  });

  const actions: actions.Actions = {
    request: callback({
      type: base.REQUEST,
      defaultMeta: {
        isLoading: true,
        notification: null,
      },
    }),
    cancel: callback({
      type: base.CANCEL,
      defaultMeta: {
        isLoading: false,
        resolve: true,
        notification: null,
      },
    }),
    success: callback({
      type: base.SUCCESS,
      defaultMeta: {
        isLoading: false,
        resolve: true,
        notification: null,
      },
    }),
    failure: callback({
      type: base.FAILURE,
      defaultMeta: {
        isLoading: false,
        reject: true,
      },
    }),
    save: callback({
      type: base.SAVE,
    }),
    remove: callback({
      type: base.REMOVE,
    }),
    open: callback({
      type: base.OPEN,
    }),
    close: callback({
      type: base.CLOSE,
    }),
  };

  return actions;
};
