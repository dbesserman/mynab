import React from 'react';
import MonthPicker from './MonthPicker/MonthPicker.jsx';
import ToBeBudgeted from './ToBeBudgeted/ToBeBudgeted.jsx';
import classes from './BudgetHeader.css';

const budgetHeader = (props) => {
  return (
    <header className={classes.BudgetHeader} currentMonthOfAYear={props.currentMonthOfAYear}>
      <MonthPicker
        currentMonthOfAYear={props.currentMonthOfAYear}
        previousMonthOfYear={props.previousMonthOfYear}
        nextMonthOfAYear={props.nextMonthOfAYear}
      />
      <ToBeBudgeted amount={props.toBeBudgeted} />
      <div className={classes.placeholder}></div>
    </header>
  )
}

export default budgetHeader;
