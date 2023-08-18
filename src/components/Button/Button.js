import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './button.css';

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="CTA" onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {text}
    </button>
  );
};

export default Button;
