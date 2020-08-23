import * as surveysActions from '../../actions/surveysActions';

const defaultState = {
  surveys: [],
  errMessage: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case surveysActions.SET_SURVEYS_SUCCESS:
      return { ...state, ...action.payload };
    case surveysActions.SET_CURVEYS_FAIL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
