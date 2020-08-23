export const SET_SURVEYS_SUCCESS = 'SET_SURVEYS_SUCCESS';
export const SET_CURVEYS_FAIL = 'SET_CURVEYS_FAIL';

export const setSurveysSuccess = surveys => {
  return { type: SET_SURVEYS_SUCCESS, payload: { surveys } };
};

export const setSurveyFail = errMEssage => {
  return { type: SET_CURVEYS_FAIL, payload: { errMEssage } };
};
