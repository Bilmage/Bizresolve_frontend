import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

export const Button = ({ text, icon, onClick, size, disabled }) => {
  const buttonClass = classNames('CTA', {
    'small-button': size === 'small',
    'medium-button': size === 'medium',
    'large-button': size === 'large',
    'disabled': disabled,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
};

export default Button;
