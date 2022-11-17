import './button.css';

// import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({
  primary,
  backgroundColor,
  size,
  disabled,
  label,
  type,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const isDisabled = disabled ? 'button--disabled' : '';
  return (
    <button
      disabled={disabled}
      type={type}
      className={['button', `button--${size}`, mode, isDisabled].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

// Button.propTypes = {
//   backgroundColor: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   primary: PropTypes.bool,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   onClick: undefined,
//   primary: false,
//   size: 'medium',
// };
