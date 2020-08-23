import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CreateSurvey from './component/CreateSurvey';
import SubmitSurvey from './component/SubmitSurvey';
import ListAnswers from './component/ListAnswers';
import ListSurveys from './component/ListSurveys';

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
              <Link to='/'>List Surveys</Link>
            </li>
            <li>
              <Link to='/create'>Create Survey</Link>
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
            <Route path='/create'>
              <CreateSurvey />
            </Route>
            <Route path='/submit'>
              <SubmitSurvey />
            </Route>
            <Route path='/answers'>
              <ListAnswers />
            </Route>
            <Route exact path='/'>
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
