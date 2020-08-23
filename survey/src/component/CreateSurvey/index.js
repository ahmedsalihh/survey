import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateSurvey = ({ errMessage, createSurvey }) => {
  let history = useHistory();

  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    createSurvey(topic, question, history);
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-title'>Create Survey</div>
      <div className='form-item'>
        <label htmlFor='topic' className='form-label'>
          Topic
        </label>
        <input
          type='text'
          className='form-input'
          name='topic'
          id='topic'
          value={topic}
          placeholder='Enter Your Topic'
          onChange={e => setTopic(e.target.value)}
        />
      </div>
      <div className='form-item'>
        <label htmlFor='topic' className='form-label'>
          Question
        </label>
        <input
          type='text'
          className='form-input'
          name='question'
          id='question'
          value={question}
          placeholder='Enter Your Question'
          onChange={e => setQuestion(e.target.value)}
        />
      </div>
      <div className='form-item'>
        <button className='form-btn' type='submit'>
          Create
        </button>
      </div>
      {errMessage ? (
        <div className='form-item'>
          <span className='form-error'>{errMessage}</span>
        </div>
      ) : null}
    </form>
  );
};

export default CreateSurvey;
