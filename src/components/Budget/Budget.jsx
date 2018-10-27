import React from 'react';
import BudgetHeader from './BudgetHeader/BudgetHeader.jsx';

const budget = (props) => {
  return (
    <>
      <BudgetHeader
        currentMonth={props.currentMonth}
        previousMonthOfYear={props.previousMonthOfYear}
        nextMonth={props.nextMonth}
        toBeBudgeted={props.toBeBudgeted}
      />
    </>
  )
}

export default budget;
