import React from 'react';
import './Error.scss';

export const Error = ({errorMessage}) => {
  return (
    <p>{errorMessage}</p>
  )
}

export default Error;
