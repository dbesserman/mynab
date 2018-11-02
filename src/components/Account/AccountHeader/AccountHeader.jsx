import React from 'react';
import BalanceItem from './BalanceItem/BalanceItem.jsx';
import classes from './AccountHeader.css';

const accountHeader = props => {
  const clearedTransactions = props.transactions.filter(transaction => transaction.cleared)
  const uncleredTransactions = props.transactions.filter(transaction => !transaction.cleared)
  const clearedBalance = clearedTransactions.reduce((sum, transaction) => sum + transaction.variation, 0)
  const unclearedBalance = uncleredTransactions.reduce((sum, transaction) => sum + transaction.variation, 0)
  const workingBalance = clearedBalance + unclearedBalance;

  return (
    <header className={classes.AccountHeader}>
      <div className={classes.accountNameContainer}>
        <div className={classes.accountNameContent}>
          <span className={classes.accountName}>All Accounts</span>
        </div>
        <div className={classes.accountNamePointer}></div>
      </div>

      <div className={classes.balances}>
        <BalanceItem caption="Cleared Balance" amount={clearedBalance} />
        <span className={classes.balanceOperator}>+</span>
        <BalanceItem caption="Uncleared Balance" amount={unclearedBalance} />
        <span className={classes.balanceOperator}>=</span>
        <BalanceItem caption="Working Balance" amount={workingBalance} />
      </div>
    </header>
  );
}

export default accountHeader;
