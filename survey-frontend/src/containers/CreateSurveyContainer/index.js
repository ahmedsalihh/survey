import { connect } from 'react-redux';
import CreateSurvey from '../../component/CreateSurvey';

import * as operations from '../../actions/operations';

const mapStateToProps = state => {
  return {
    errMessage: state.createSurvey.errMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSurvey: (topic, question, history) =>
      dispatch(operations.createSurvey(topic, question, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSurvey);
