import React from 'react';
import classes from './Spinner.css';

const spinner = () => {
  return (
    <div className={classes.SpinnerContainer}>
      <div className={classes.Spinner}>Loading...</div>
    </div>
  )
}

export default spinner;
