import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './containers/App/reducer';
import filterReducer from './containers/Filters/reducer';

const containersReducer = {
  containers: combineReducers({
    data: appReducer,
    filters: filterReducer,
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () => (
  combineReducers({
    ...containersReducer,
    route: routerReducer,
  })
);

export default createGlobalReducer;
