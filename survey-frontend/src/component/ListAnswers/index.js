import React, { useState } from 'react';
import CommonTable from '../CommonTable';
import SurveySelect from '../SurveySelect';

import { answerListColumns } from '../../constants';

const ListAnswers = ({ answers, errMessage, getAnswersBySurveyId }) => {
  const handleSelectionChange = value => {
    getAnswersBySurveyId(value);
  };

  return (
    <div>
      <div>
        <h1>List Answers</h1>
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
