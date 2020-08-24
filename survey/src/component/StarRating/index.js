import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './star-rating.css';

const StartRating = ({ onRateChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRateChange = ratingValue => {
    setRating(ratingValue);
    onRateChange(ratingValue);
  };
  return (
    <>
      <div>
        {[...Array(10)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={ratingValue}>
              <input
                type='radio'
                name='star'
                value={ratingValue}
                onChange={() => handleRateChange(ratingValue)}
              />
              <FaStar
                className='star'
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                size={'7%'}
              />
            </label>
          );
        })}
      </div>
      <div className='descContainer'>
        <span className='left'>Not at all likely</span>
        <span className='right'>Extremely likely</span>
      </div>
    </>
  );
};

export default StartRating;
