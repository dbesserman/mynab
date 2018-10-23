import React from 'react';
import PropTypes from 'prop-types';
import MonthOfAYear from '../../../../pureJsClasses/MonthOfAYear.js';
import classes from './MonthPicker.css';

class MonthPicker extends React.Component {
  render() {
    return (
      <div className={classes.MonthPicker}>
        <i
          className={classes.PrevMonth}
          onClick={this.props.previousMonthOfYear}
        ></i>
        <span>{this.props.currentMonthOfAYear.toString()}</span>
        <i className={classes.NextMonth}
          onClick={this.props.nextMonthOfAYear}
        ></i>
      </div>
    )
  }
}

MonthPicker.propTypes = {
  previousMonthOfYear: PropTypes.func,
  currentMonthOfAYear: PropTypes.instanceOf(MonthOfAYear),
  nextMonthOfAYear: PropTypes.func,
}

export default MonthPicker;
