import React, { useEffect, useState } from 'react';
import { surveyListColumns } from '../../constants';
import Axios from 'axios';
import CommonTable from '../CommonTable';

const ListSurveys = ({ surveys, getSurveys }) => {
  // const [surveys, setSurveys] = useState([]);

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
