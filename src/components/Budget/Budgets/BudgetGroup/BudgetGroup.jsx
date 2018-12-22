import React from 'react';
import classes from './BudgetGroup.css';
import BudgetCategory from './BudgetCategory/BudgetCategory.jsx';
import { formatAmount } from '../../../../helpers';

const budgetGroup = props => {
  const transactionsTotalVariation = props.transactions.reduce((sum, tr) => sum + tr.variation, 0)
  const budgetedTotal = props.categories
    .map(cat => cat.budgetEvents[0].variation)
    .reduce((sum, be) => sum + be, 0)
  const categoryTransactions = (category) => {
    return props.transactions.filter(transaction => transaction.category === category.name)
  }

  return (
    <>
      <tr className={classes.BudgetGroupHeader}>
        <td>{props.name}</td>
        <td className={classes.textRight}>{formatAmount(budgetedTotal)}</td>
        <td className={classes.textRight}>{formatAmount(transactionsTotalVariation)}</td>
        <td className={classes.textRight}>{formatAmount(budgetedTotal + transactionsTotalVariation)}</td>
      </tr>
      {props.categories.map(category => {
        return (
          <BudgetCategory
            key={category.id}
            selectedMonth={props.selectedMonth}
            transactions = {categoryTransactions(category)}
            {...category}
          />
        )
      })}
    </>
  )
}

export default budgetGroup;
