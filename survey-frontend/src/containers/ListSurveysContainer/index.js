import { connect } from 'react-redux';
import ListSurveys from '../../component/ListSurveys';

import * as operations from '../../actions/operations';

const mapStateToProps = state => {
  return {
    surveys: state.surveyReducer.surveys,
    errMessage: state.surveyReducer.errMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSurveys: () => dispatch(operations.getSurveys()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSurveys);
