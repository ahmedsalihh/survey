import { combineReducers } from 'redux';

import createSurvey from './createSurveyReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
  createSurvey,
  answerReducer,
});

export default rootReducer;
