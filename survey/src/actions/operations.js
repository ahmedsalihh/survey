import { createSurveyFail } from './createSurveyActions';
import Axios from 'axios';

export const createSurvey = (topic, question, history) => {
  return dispatch => {
    if (topic === '' || question === '') {
      dispatch(createSurveyFail('Fileds cannot be empty!!'));
    } else {
      Axios.post(`http://localhost:8080/surveys`, { topic, question })
        .then(() => {
          history.push('/surveys');
        })
        .catch(err => {
          dispatch(createSurveyFail(err.message));
        });
    }
  };
};
