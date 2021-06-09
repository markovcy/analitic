import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { authReducers } from '@upp/chrome/modules';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (history: any) =>
  combineReducers({
    ...authReducers,
    // ...navigationReducers,
    router: connectRouter(history),
  });

export default rootReducer;
