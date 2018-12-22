import React from 'react';
import BudgetHeader from './BudgetHeader/BudgetHeader.jsx';
import Budgets from './Budgets/Budgets.jsx';

const budget = (props) => {
  return (
    <>
      <BudgetHeader
        selectedMonth={props.selectedMonth}
        selectPreviousMonth={props.selectPreviousMonth}
        selectNextMonth={props.selectNextMonth}
        toBeBudgeted={props.toBeBudgeted}
      />
      <Budgets
        groups={props.groups}
        selectedMonth={props.selectedMonth}
        transactions={props.transactions}
      />
    </>
  )
}

export default budget;
