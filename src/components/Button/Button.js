import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const Button = ({ children, link, secondary, className, ...props }) => {
  const buttonClasses = classNames({
    [className]: className,
    button: true,
    'button-secondary': !!secondary,
  });

  if (link) {
    return (
      <Link {...props} className={buttonClasses} to={link}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  link: '',
  className: '',
  secondary: false,
};

export { Button };
