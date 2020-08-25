import Axios from 'axios';

import * as createSurveyActions from './createSurveyActions';
import * as answerActions from './answerActions';
import * as surveysActions from './surveysActions';
import finalConfig from '../config/config';

export const createSurvey = (topic, question, history) => {
  return dispatch => {
    if (topic === '' || question === '') {
      dispatch(createSurveyActions.createSurveyFail('Fileds cannot be empty!!'));
    } else {
      Axios.post(finalConfig.SURVEYS, { topic, question })
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
    Axios.get(`${finalConfig.ANSWERS}/${surveyId}`)
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
    Axios.get(finalConfig.SURVEYS)
      .then(res => {
        dispatch(surveysActions.setSurveysSuccess(res.data));
      })
      .catch(err => {
        dispatch(surveysActions.setSurveyFail(err.message));
      });
  };
};

export const getSelectedSurvey = surveyId => {
  return dispatch => {
    Axios.get(`${finalConfig.SURVEYS}/${surveyId}`)
      .then(res => {
        dispatch(surveysActions.getSelectedSurveySuccess(res.data));
      })
      .catch(err => {
        dispatch(surveysActions.getSelectedSurveyFail(err.message));
      });
  };
};
export const submitSurvey = (surveyId, data, history) => {
  return dispatch => {
    Axios.post(`${finalConfig.ANSWERS}/${surveyId}`, data)
      .then(res => {
        dispatch(answerActions.setSelectedAnswers([]));
        dispatch(surveysActions.getSelectedSurveySuccess(null));
        history.push('/answers');
      })
      .catch(err => {
        dispatch(answerActions.submitSurveyFail(err.message));
      });
  };
};
