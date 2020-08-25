import { connect } from 'react-redux';
import SubmitSurvey from '../../component/SubmitSurvey';

import * as operations from '../../actions/operations';

const mapStateToProps = state => {
  return {
    selectedSurvey: state.surveyReducer.selectedSurvey,
    submitSurveyFailMessage: state.answerReducer.submitSurveyFailMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedSurvey: surveyId => dispatch(operations.getSelectedSurvey(surveyId)),
    submitSurvey: (surveyId, data, history) =>
      dispatch(operations.submitSurvey(surveyId, data, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitSurvey);
