import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as types from './types';
import { actions } from './actions';

export const useGetState = <T extends keyof types.State>(
  name: T
): types.State[T] => {
  const state = useSelector((state: types.State) => state[name]);

  return state;
};

export const useGetAction = <T extends keyof typeof actions>(name: T) => {
  const dispatch = useDispatch();
  const action = useMemo(() => actions[name], [name]);

  const isGenerateActions = typeof action === 'object';

  const callback = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (actionType) => (payload: any) => {
      dispatch(actionType(payload));
    },
    [dispatch]
  );

  const returnAction = useMemo(
    () =>
      isGenerateActions
        ? (Object.keys(action) as (keyof typeof action)[]).reduce(
            (prev, next: keyof typeof action) => ({
              ...prev,
              [next]: callback(action[next]),
            }),
            {}
          )
        : callback(action),
    [action, callback, isGenerateActions]
  ) as typeof action;

  return returnAction;
};
