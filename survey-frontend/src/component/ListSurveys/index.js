import React, { useEffect, useState } from 'react';

import CommonTable from '../CommonTable';

import { surveyListColumns } from '../../constants';

const ListSurveys = ({ surveys, getSurveys }) => {
  useEffect(() => {
    getSurveys();
  }, [getSurveys]);

  return (
    <div>
      <div>
        <h1>List Surveys</h1>
      </div>
      <div>
        <CommonTable data={surveys} columns={surveyListColumns} />
      </div>
    </div>
  );
};

export default ListSurveys;
