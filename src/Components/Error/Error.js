import React from 'react';
import './Error.scss';
import PropTypes from 'prop-types';


export const Error = ({errorMessage}) => {
  return (
    <p>{errorMessage}</p>
  )
}

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.string
}
