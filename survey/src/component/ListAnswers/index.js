import React, { useState } from 'react';
import { answerListColumns } from '../../constants';
import CommonTable from '../CommonTable';
import Axios from 'axios';
import SurveySelect from '../SurveySelect';

const ListAnswers = ({ answers, errMessage, getAnswersBySurveyId }) => {
  // const [answers, setAnswers] = useState([]);

  // const getSurveys = surveyId => {
  //   if (surveyId) {
  //     Axios.get(`http://localhost:8080/answers/${surveyId}`)
  //       .then(res => {
  //         setAnswers(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };

  const handleSelectionChange = value => {
    getAnswersBySurveyId(value);
  };

  return (
    <div>
      <div>
        <h1>List Surveys</h1>
      </div>
      <div>
        <SurveySelect selectionChange={handleSelectionChange} />
      </div>
      <div>
        <CommonTable data={answers} columns={answerListColumns} />
      </div>
    </div>
  );
};

export default ListAnswers;
