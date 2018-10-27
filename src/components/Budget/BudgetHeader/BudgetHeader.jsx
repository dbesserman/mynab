import React from 'react';
import MonthPicker from './MonthPicker/MonthPicker.jsx';
import ToBeBudgeted from './ToBeBudgeted/ToBeBudgeted.jsx';
import classes from './BudgetHeader.css';

const budgetHeader = (props) => {
  return (
    <header className={classes.BudgetHeader} currentMonth={props.currentMonth}>
      <MonthPicker
        currentMonth={props.currentMonth}
        previousMonthOfYear={props.previousMonthOfYear}
        nextMonth={props.nextMonth}
      />
      <ToBeBudgeted amount={props.toBeBudgeted} />
      <div className={classes.placeholder}></div>
    </header>
  )
}

export default budgetHeader;
