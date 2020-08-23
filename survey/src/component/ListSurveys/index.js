import React, { useEffect, useState } from 'react';
import { surveyListColumns } from '../../constants';
import Axios from 'axios';
import CommonTable from '../CommonTable';

const ListSurveys = () => {
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
