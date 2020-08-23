import { combineReducers } from 'redux';

import createSurvey from './createSurveyReducer';
import answerReducer from './answerReducer';
import surveyReducer from './surveyReducer';

const rootReducer = combineReducers({
  createSurvey,
  answerReducer,
  surveyReducer,
});

export default rootReducer;
