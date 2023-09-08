import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaStar } from 'react-icons/fa';
import Button from "../Button/Button";
import './textarea.css';

export const TextAreaField = () => {
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
    <div className="container-fluid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
  &nbsp; &nbsp; 
  <textarea
    className="form-control"
    placeholder="Leave a comment..."
    required
    rows="3"
    value={comment}
    onChange={handleCommentChange}
  />&nbsp; &nbsp; 
  <Button text="Submit" icon={FaPaperPlane} onClick={handleSubmit} />
</div>

  );
};

export default TextAreaField;
