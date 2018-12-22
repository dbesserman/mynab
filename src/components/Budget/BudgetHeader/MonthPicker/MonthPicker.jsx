import React from 'react';
import PropTypes from 'prop-types';
import Month from '../../../../pureJsClasses/Month.js';
import classes from './MonthPicker.css';

class MonthPicker extends React.Component {
  render() {
    return (
      <div className={classes.MonthPicker}>
        <i
          className={classes.PrevMonth}
          onClick={this.props.selectPreviousMonth}
        ></i>
        <span>{this.props.selectedMonth.toString()}</span>
        <i
          className={classes.NextMonth}
          onClick={this.props.selectNextMonth}
        ></i>
      </div>
    )
  }
}

MonthPicker.propTypes = {
  previousMonthOfYear: PropTypes.func,
  selectedMonth: PropTypes.instanceOf(Month),
  nextMonth: PropTypes.func,
}

export default MonthPicker;
