import { useState } from 'react'
import './App.css'
import AddTransaction from './assets/componenet/AddTransection'
import Balance from './assets/componenet/Balance'
import Header from './assets/componenet/Header'
import IncomeExpenses from './assets/componenet/IncomeExpense'
import TransactionList from './assets/componenet/TransactionList'

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction)=> {
    setTransactions([...transactions, transaction])
  }
  
  const calculateBalance = ()=> {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0  )
  }

  const calculateIncome = ()=> {
      return transactions
      .filter((transaction)=> transaction.amount > 0 )
      .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  const calculateExpenses = () => {
    return transactions
    .filter((transaction)=> transaction.amount  < 0 )
    .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  return (
    <>
     <Header />
     <Balance balance={calculateBalance()} />
     <IncomeExpenses income={calculateIncome()}  expense={calculateExpenses()} />
     <TransactionList transactions={transactions} />
     <AddTransaction addTransaction={addTransaction} />
    </>
  )
}

export default App