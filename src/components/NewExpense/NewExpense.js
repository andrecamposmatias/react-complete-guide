import React from 'react'

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {

  const saveExpenseDateHandler = (enteredExpenseData) => {

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  )
};

export default NewExpense;
