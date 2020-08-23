import Axios from 'axios';

import * as createSurveyActions from './createSurveyActions';
import * as answerActions from './answerActions';
import * as surveysActions from './surveysActions';

export const createSurvey = (topic, question, history) => {
  return dispatch => {
    if (topic === '' || question === '') {
      dispatch(createSurveyActions.createSurveyFail('Fileds cannot be empty!!'));
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

export const getSurveys = () => {
  return dispatch => {
    Axios.get('http://localhost:8080/surveys')
      .then(res => {
        dispatch(surveysActions.setSurveysSuccess(res.data));
      })
      .catch(err => {
        dispatch(surveysActions.setSurveyFail(err.message));
      });
  };
};
