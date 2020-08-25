import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
