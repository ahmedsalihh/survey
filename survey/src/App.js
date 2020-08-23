import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CreateSurvey from './component/CreateSurvey';
import SubmitSurvey from './component/SubmitSurvey';
import ListAnswers from './component/ListAnswers';
import ListSurveys from './component/ListSurveys';
import CreateSurveyContainer from './containers/CreateSurveyContainer';
import ListAnswersContainer from './containers/ListAnswersContainer';

const App = () => {
  return (
    <>
      <header id='main-header'>
        <div className='container'>
          <h1>My Website</h1>
        </div>
      </header>

      <nav id='navbar'>
        <div className='container'>
          <ul>
            <li>
              <Link to='/'>Create Survey</Link>
            </li>
            <li>
              <Link to='/surveys'>List Surveys</Link>
            </li>
            <li>
              <Link to='/submit'>Submit Survey</Link>
            </li>
            <li>
              <Link to='/answers'>List Answers</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container'>
        <section id='main'>
          <Switch>
            <Route exact path='/'>
              <CreateSurveyContainer />
            </Route>
            <Route path='/submit'>
              <SubmitSurvey />
            </Route>
            <Route path='/answers'>
              <ListAnswersContainer />
            </Route>
            <Route path='/surveys'>
              <ListSurveys />
            </Route>
          </Switch>
        </section>
      </div>

      <footer id='main-footer'>
        <p>Copyright &copy; 2020 My Website</p>
      </footer>
    </>
  );
};

export default App;
