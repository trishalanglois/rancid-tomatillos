import React from 'react';
import './Error.scss';

const Error = ({errorMessage}) => {
  return (
    <p>{errorMessage}</p>
  )
}

export default Error;