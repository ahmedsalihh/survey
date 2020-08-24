import * as answerActions from '../../actions/answerActions';

const defaultState = {
  answers: [],
  errMessage: null,
  submitSurveyFailMessage: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case answerActions.SET_SELECTED_ANSWERS_SUCCESS:
      return { ...state, ...action.payload };
    case answerActions.SUBMIT_SURVEY_FAIL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
