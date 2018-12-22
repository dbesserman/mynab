import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import mynabAPI from '../../mynabAPI';
import Budget from '../../components/Budget/Budget.jsx';
import Month from '../../pureJsClasses/Month';
import Account from '../../components/Account/Account.jsx';
import classes from './Main.css';
import Spinner from '../../UI/Spinner/Spinner.jsx';

class Main extends React.Component {
  constructor() {
    const currentDate = new Date()
    super();
    this.state = {
      selectedMonth: new Month(currentDate.getFullYear(), currentDate.getMonth()),
    };
  }
  
  toggleTransactionClearance = transaction => {
    let transactionsCopy = [ ...this.state.transactions ]
    const idx = transactionsCopy.findIndex(tr => tr.id === transaction.id)
    const transactionCopy = { ...transaction, cleared: !transaction.cleared }

    transactionsCopy.splice(idx, 1,transactionCopy)

    this.setState({ transactions: transactionsCopy })
  }

  selectPreviousMonth = () => {
    this.setState(previousState => {
      return { selectedMonth: previousState.selectedMonth.previousMonth() }
    })
  }

  selectNextMonth = () => {
    this.setState(previousState => {
      return { selectedMonth: previousState.selectedMonth.nextMonth() }
    });
  }

  toBeBudgeted = () => {
    const now = new Date()
    const transactionsUntillNow = this.state.transactions
      .filter(tr => tr.date < now)
    return transactionsUntillNow.reduce((sum, tr) => sum + tr.variation, 0)
  }

  getTransactions = () => {
    mynabAPI.get('/transactions')
      .then(response => {
        const transactions = response.data.map(transaction => {
          return { ...transaction, date: new Date(transaction.date) }
        })

        this.setState({ transactions: transactions })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  getGroups = () => {
    mynabAPI.get('/groups')
      .then(response => {
        const groups = response.data

        this.setState({ groups: groups })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentDidMount() {
    if (!this.state.transactions) {
      this.getTransactions()
    }
    if (!this.state.groups) {
      this.getGroups()
    }
  }

  render() {
    let content = <Spinner />

    if (this.state.transactions && this.state.groups) {
      content = (
        <Switch>
          <Route path="/budget" render={() => {
            return (
              <Budget
               selectedMonth={this.state.selectedMonth}
               selectPreviousMonth={this.selectPreviousMonth}
               selectNextMonth={this.selectNextMonth}
               toBeBudgeted={this.toBeBudgeted()}
               groups={this.state.groups}
               transactions={this.state.transactions}
             />
            )}}
          />
          <Route path="/accounts" render={() => {
            return (
              <Account
                transactions={this.state.transactions}
                setTransactions={this.setTransactions}
                toggleTransactionClearance={this.toggleTransactionClearance}
              />
            )
          }} />
          <Redirect from="/" to="/accounts" />
        </Switch>
      )
    }

    return (
      <main className={classes.Main}>
        {content} 
      </main>
    )
  }
}

export default Main;
