import * as surveysActions from '../../actions/surveysActions';

const defaultState = {
  surveys: [],
  selectedSurvey: null,
  selectedSurveyErr: null,
  errMessage: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case surveysActions.SET_SURVEYS_SUCCESS:
      return { ...state, ...action.payload };
    case surveysActions.SET_CURVEYS_FAIL:
      return { ...state, ...action.payload };
    case surveysActions.GET_SELECTED_SURVEY_SUCCESS:
      return { ...state, ...action.payload };
    case surveysActions.GET_SELECTED_SURVEY_FAIL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
