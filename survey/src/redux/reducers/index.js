import { combineReducers } from 'redux';

import createSurvey from './createSurveyReducer';

const rootReducer = combineReducers({
  createSurvey,
});

export default rootReducer;
