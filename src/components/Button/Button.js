import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const Button = ({ children, link, ...props }) => {
  if (link) {
    return (
      <Link {...props} className="button" to={link}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" {...props} className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
};

Button.defaultProps = {
  link: '',
};

export { Button };
