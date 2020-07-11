import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Im some other page bitch!
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
