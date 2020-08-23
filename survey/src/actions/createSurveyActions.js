export const CREATE_SURVEY_FAIL = 'CREATE_SURVEY_FAIL';

export const createSurveyFail = errMessage => {
  return { type: CREATE_SURVEY_FAIL, payload: { errMessage } };
};
