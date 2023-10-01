import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaStar } from 'react-icons/fa';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import safaricom from "../../assets/images/Safaricom.png";
import './rate.css';

export const RatingAndComment = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/submit', { rating, comment });
      alert('Rating and comment submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit rating and comment');
    }
  };

  return (
    <div className="container">
      <div className="rate-message">
        <div className='avatarr'>
          
            <img src={safaricom} alt="Profile" />

         
        </div>

        <h1 className="rate-your-experience">Rate your experience with us</h1>
        <p className="are-you-satisfied">Are you satisfied with our service?</p>
        <p className="additionally-you-ll">
          <span className="text-wrapper">
            Alternatively, you can search for another business by clicking{' '}
            <Link to="/search">
              <strong >here</strong>
            </Link>
          </span>
        </p>

        <div className="ratings">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <FaStar
              key={starIndex}
              className={`star-icon ${starIndex <= rating ? 'filled' : ''}`}
              style={{ color: starIndex <= rating ? '#F78431' : 'gray', fontSize: '50px' }}
              onClick={() => handleRatingChange(starIndex)}
            />
          ))}
        </div>

        <textarea
          className="form-control"
          placeholder="Leave a comment..."
          required
          rows="3"
          value={comment}
          onChange={handleCommentChange}
        />

        <Button text="Submit" icon={FaPaperPlane} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default RatingAndComment;
