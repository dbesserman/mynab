import React from 'react';
import BudgetHeader from './BudgetHeader/BudgetHeader.jsx';

const budget = (props) => {
  return (
    <>
      <BudgetHeader
        currentMonthOfAYear={props.currentMonthOfAYear}
        previousMonthOfYear={props.previousMonthOfYear}
        nextMonthOfAYear={props.nextMonthOfAYear}
        toBeBudgeted={props.toBeBudgeted}
      />
    </>
  )
}

export default budget;
