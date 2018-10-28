import React from 'react';
import Transaction from './Transaction/Transaction.jsx';
import classes from './Transactions.css'

const transactions = (props) => {
  return (
    <table className={classes.Transactions}>
      <thead>
        <tr>
          <th className={classes.account}><span>Account</span></th>
          <th><span>Date</span></th>
          <th className={classes.payee}><span>Payee</span></th>
          <th className={classes.category}><span>Category</span></th>
          <th className={classes.memo}><span>Memo</span></th>
          <th><span>Outflow</span></th>
          <th><span>Inflow</span></th>
          <th className={classes.clearance}><span>c</span></th>
        </tr>
      </thead>
      <tbody>
        {
          props.transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              toggleTransactionClearance={() => props.toggleTransactionClearance(transaction)}
              {...transaction}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default transactions;
