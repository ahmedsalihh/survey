import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import StartRating from '../StarRating';
import SurveySelect from '../SurveySelect';

import './submit-survey.css';

const SubmitSurvey = ({
  selectedSurvey,
  getSelectedSurvey,
  submitSurveyFailMessage,
  submitSurvey,
}) => {
  let history = useHistory();

  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [surveyId, setSurveyId] = useState(null);

  const handleRateChange = value => {
    setScore(value);
  };

  const handleSelectionChange = value => {
    setSurveyId(value);
    getSelectedSurvey(value);
  };

  const handleSurveySubmit = () => {
    submitSurvey(surveyId, { score, feedback }, history);
  };

  return (
    <div>
      <div>
        <h1>Submit Survey</h1>
      </div>
      <div>
        <SurveySelect selectionChange={handleSelectionChange} />
      </div>
      {!selectedSurvey ? null : (
        <div className='survey-form'>
          <div>
            <StartRating onRateChange={handleRateChange} />
          </div>
          <div>
            <h2>What is the most important reason for your score?</h2>
          </div>
          <div>
            <textarea
              name='topic'
              id='topic'
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
            />
          </div>
          <div>
            <button className='btn' onClick={handleSurveySubmit}>
              Submit Survey
            </button>
          </div>
          {submitSurveyFailMessage ? <span>{submitSurveyFailMessage}</span> : null}
        </div>
      )}
    </div>
  );
};

export default SubmitSurvey;
