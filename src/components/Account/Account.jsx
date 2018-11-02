import React from 'react';
import Transactions from './Transactions/Transactions.jsx';
import AccountHeader from './AccountHeader/AccountHeader.jsx';

const account = props => {
  return (
    <>
      <AccountHeader transactions={props.transactions} />
      <Transactions
        transactions={props.transactions}
        toggleTransactionClearance={props.toggleTransactionClearance}
      />
    </>
  )
}

export default account;
