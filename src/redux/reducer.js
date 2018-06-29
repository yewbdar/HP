import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import candidateReduicer from './reducers/candidateReduicer';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  authUser,
  common,
  candidateReduicer,

  router: routerReducer
});
