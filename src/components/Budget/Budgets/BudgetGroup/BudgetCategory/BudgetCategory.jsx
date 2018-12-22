import React from 'react';
import classes from './BudgetCategory.css';
import { formatAmount } from '../../../../../helpers';

const budgetCategory = props => {
  const budgetEvent = props.budgetEvents.find(be => {
    return be.monthIndex === props.selectedMonth.monthIndex &&
      be.year === props.selectedMonth.year
  })
  const budgetedAmount = budgetEvent ? budgetEvent.variation : 0
  const activityAmount = props.transactions.reduce((sum, transaction) => {
    return sum + transaction.variation
  }, 0)
  const remainingAmount = budgetedAmount + activityAmount
  const availableAmountClass = () => {
    const classNames = [classes.RemainingAmount]
    if (remainingAmount > 0) {
      classNames.push(classes.positive)
    } else if (remainingAmount == 0) {
      classNames.push(classes.zero) 
    } else {
      classNames.push(classes.negative)
    }

    return classNames.join(' ')
  }

  return (
    <tr className={classes.BudgetCategory}>
      <td>{props.name}</td>
      <td className={classes.textRight}>{formatAmount(budgetedAmount)}</td>
      <td className={classes.textRight}>{formatAmount(activityAmount)}</td>
      <td className={classes.textRight}>
        <span className={availableAmountClass()}>{formatAmount(remainingAmount)}</span>
      </td>
    </tr>
  )
}

export default budgetCategory;
