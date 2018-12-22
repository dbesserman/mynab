import React from 'react';
import MonthPicker from './MonthPicker/MonthPicker.jsx';
import ToBeBudgeted from './ToBeBudgeted/ToBeBudgeted.jsx';
import classes from './BudgetHeader.css';

const budgetHeader = (props) => {
  return (
    <header className={classes.BudgetHeader}>
      <MonthPicker
        selectedMonth={props.selectedMonth}
        selectPreviousMonth={props.selectPreviousMonth}
        selectNextMonth={props.selectNextMonth}
      />
      <ToBeBudgeted amount={props.toBeBudgeted} />
      <div className={classes.placeholder}></div>
    </header>
  )
}

export default budgetHeader;
