import * as createSurveyActions from '../../actions/createSurveyActions';

const defaultState = {
  errMessage: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case createSurveyActions.CREATE_SURVEY_FAIL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
