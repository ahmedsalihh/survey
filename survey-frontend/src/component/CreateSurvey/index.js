import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './create-survey.css';

const CreateSurvey = ({ errMessage, createSurvey }) => {
  let history = useHistory();

  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    handleContentLoaded();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    createSurvey(topic, question, history);
  };

  const handleContentLoaded = () => {
    var elems = document.querySelectorAll('.form-item');
    elems.forEach(input =>
      input.addEventListener('input', () => {
        input.children[1].className = input.children[1].className.replace(/form-input-error ?/, '');
      }),
    );
  };

  return (
    <div>
      <h1>Create Survey</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='topic' className='form-label'>
            Topic
          </label>
          <input
            type='text'
            className='form-input form-input-error'
            name='topic'
            id='topic'
            value={topic}
            placeholder='Enter Your Topic'
            onChange={e => setTopic(e.target.value)}
          />
          <span className='form-error'>Topic cannot be empty</span>
        </div>
        <div className='form-item'>
          <label htmlFor='topic' className='form-label'>
            Question
          </label>
          <input
            type='text'
            className='form-input form-input-error'
            name='question'
            id='question'
            value={question}
            placeholder='Enter Your Question'
            onChange={e => setQuestion(e.target.value)}
          />
          <span className='form-error'>Question cannot be empty</span>
        </div>
        <div className='form-item'>
          <button className='form-btn' type='submit'>
            Create
          </button>
        </div>
        {errMessage ? (
          <div className='form-item'>
            <span>{errMessage}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreateSurvey;
