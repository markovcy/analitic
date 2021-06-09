/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Actions } from './types';

const submitPromises = {} as { [key: string]: any };

export const asyncFormMiddleware = () => (next: any) => (action: any) => {
  if (!action.meta) {
    return next(action);
  }

  if (action.meta.submitPromise) {
    submitPromises[action.meta.id] = action.meta.submitPromise;
    return next(action);
  }

  if (!submitPromises[action.meta.id]) {
    return next(action);
  }

  if (action.meta.resolve) {
    submitPromises[action.meta.id].resolve();
  }

  if (action.meta.reject) {
    submitPromises[action.meta.id].reject();
  }

  delete submitPromises[action.meta.id];
  return next(action);
};
