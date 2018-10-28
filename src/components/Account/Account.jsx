import React from 'react';
import Transactions from './Transactions/Transactions.jsx';

const account = (props) => {
  return (
    <Transactions
      transactions={props.transactions}
      toggleTransactionClearance={props.toggleTransactionClearance}
    />
  )
}

export default account;
