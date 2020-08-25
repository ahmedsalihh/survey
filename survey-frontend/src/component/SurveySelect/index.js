import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './survey-select.css';

const SurveySelect = ({ selectionChange }) => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    function getSurveys() {
      Axios.get('http://localhost:8080/surveys')
        .then(res => {
          setSurveys(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getSurveys();
  }, []);

  const renderOptions = () => {
    if (surveys.length > 0) {
      return surveys.map((item, optionIndex) => (
        <option key={optionIndex} value={item.id}>
          {item.topic}
        </option>
      ));
    } else {
      return null;
    }
  };

  return (
    <select className='select' onChange={e => selectionChange(e.target.value)}>
      <option disabled selected>
        Choose Survey
      </option>
      {renderOptions()}
    </select>
  );
};

export default SurveySelect;
