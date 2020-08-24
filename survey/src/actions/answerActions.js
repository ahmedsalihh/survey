export const SET_SELECTED_ANSWERS_SUCCESS = 'SET_SELECTED_ANSWERS_SUCCESS';
export const SET_SELECTED_ANSWERS_FAIL = 'SET_SELECTED_ANSWERS_FAIL';
export const SUBMIT_SURVEY_FAIL = 'SUBMIT_SURVEY_FAIL';

export const setSelectedAnswers = answers => {
  return { type: SET_SELECTED_ANSWERS_SUCCESS, payload: { answers } };
};

export const setSelectedAnswersFail = errMessage => {
  return { type: SET_SELECTED_ANSWERS_FAIL, payload: { errMessage } };
};

export const submitSurveyFail = submitSurveyFailMessage => {
  return { type: SUBMIT_SURVEY_FAIL, payload: { submitSurveyFailMessage } };
};
