export const SET_SURVEYS_SUCCESS = 'SET_SURVEYS_SUCCESS';
export const SET_CURVEYS_FAIL = 'SET_CURVEYS_FAIL';
export const GET_SELECTED_SURVEY_SUCCESS = 'GET_SELECTED_SURVEY_SUCCESS';
export const GET_SELECTED_SURVEY_FAIL = 'GET_SELECTED_SURVEY_FAIL';

export const setSurveysSuccess = surveys => {
  return { type: SET_SURVEYS_SUCCESS, payload: { surveys } };
};

export const setSurveyFail = errMEssage => {
  return { type: SET_CURVEYS_FAIL, payload: { errMEssage } };
};

export const getSelectedSurveySuccess = selectedSurvey => {
  return { type: GET_SELECTED_SURVEY_SUCCESS, payload: { selectedSurvey } };
};

export const getSelectedSurveyFail = selectedSurveyErr => {
  return { type: GET_SELECTED_SURVEY_FAIL, payload: { selectedSurveyErr } };
};
