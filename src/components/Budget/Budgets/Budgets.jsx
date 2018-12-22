import React from 'react';
import classes from './Budgets.css';
import BudgetGroup from './BudgetGroup/BudgetGroup.jsx';

const budgets = props => {
  const groupCategoryNames = group => group.categories.map(category => category.name)
  const groupTransactions = group => {
    return props.transactions.filter(transaction => groupCategoryNames(group).includes(transaction.category))
  }

  return (
    <>
      <table className={classes.Budgets}>
        <thead>
          <tr>
            <th className={classes.category}>category</th>
            <th className={`${classes.amount} ${classes.textRight}`}>budgeted</th>
            <th className={`${classes.amount} ${classes.textRight}`}>activity</th>
            <th className={`${classes.available} ${classes.textRight}`}>available</th>
          </tr>
        </thead>
        <tbody>
          {props.groups.map(group => (
            <BudgetGroup
              key={group.id}
              selectedMonth={props.selectedMonth}
              transactions={groupTransactions(group)}
              { ...group }
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default budgets;
