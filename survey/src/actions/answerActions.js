export const SET_SELECTED_ANSWERS_SUCCESS = 'SET_SELECTED_ANSWERS_SUCCESS';

export const setSelectedAnswers = answers => {
  return { type: SET_SELECTED_ANSWERS_SUCCESS, payload: { answers } };
};

export const setSelectedAnswersFail = errMessage => {
  return { type: SET_SELECTED_ANSWERS_FAIL, payload: { errMessage } };
};
