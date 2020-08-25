import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateSurveyContainer from '../../containers/CreateSurveyContainer';
import SubmitSurveyContainer from '../../containers/SubmitSurveyContainer';
import ListAnswersContainer from '../../containers/ListAnswersContainer';
import ListSurveysContainer from '../../containers/ListSurveysContainer';

const Content = () => {
  return (
    <div className='container'>
      <section id='main'>
        <Switch>
          <Route exact path='/'>
            <CreateSurveyContainer />
          </Route>
          <Route path='/submit'>
            <SubmitSurveyContainer />
          </Route>
          <Route path='/answers'>
            <ListAnswersContainer />
          </Route>
          <Route path='/surveys'>
            <ListSurveysContainer />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Content;
