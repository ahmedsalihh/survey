import Axios from 'axios';

import * as createSurveyActions from './createSurveyActions';
import * as answerActions from './answerActions';

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
          dispatch(createSurveyActions.createSurveyFail(err.message));
        });
    }
  };
};

export const getAnswersBySurveyId = surveyId => {
  return dispatch => {
    Axios.get(`http://localhost:8080/answers/${surveyId}`)
      .then(res => {
        dispatch(answerActions.setSelectedAnswers(res.data));
      })
      .catch(err => {
        dispatch(answerActions.setSelectedAnswersFail(err.message));
        console.log(err);
      });
  };
};
