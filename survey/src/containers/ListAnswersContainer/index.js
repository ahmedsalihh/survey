import { connect } from 'react-redux';
import ListAnswers from '../../component/ListAnswers';

import * as operations from '../../actions/operations';

const mapStateToProps = state => {
  return {
    answers: state.answerReducer.answers,
    errMessage: state.answerReducer.errMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAnswersBySurveyId: surveyId => dispatch(operations.getAnswersBySurveyId(surveyId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAnswers);
