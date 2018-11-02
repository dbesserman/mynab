import React from 'react';
import classes from './BalanceItem.css';

const balanceItem = props => {
  let balanceAmountClasses = [classes.balanceAmount];
  const formatPrice = amount => `${amount/100} €`
  
  props.amount >= 0 ? balanceAmountClasses.push(classes.positive) : balanceAmountClasses.push(classes.negative)


  return (
    <div className={classes.BalanceItem}>
      <span className={classes.balanceCaption}>{props.caption}</span>
      <span className={balanceAmountClasses.join(' ')}>{formatPrice(props.amount)}</span>
    </div>
  )
}

export default balanceItem;
