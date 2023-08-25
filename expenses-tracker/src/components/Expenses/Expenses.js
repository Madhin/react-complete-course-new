import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    // console.log("Expenses.js", selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

    
  return (
    <div>
    <Card className="expenses">
     <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear}/>
     {///conditonal content
     /* {filteredExpenses.length === 0 && <p>No Expenses Found</p> }
     {filteredExpenses.length > 0 && filteredExpenses.map((expense) => 
     <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} */}
    <ExpensesList items ={filteredExpenses} />
    </Card>
    </div>
  );
}

export default Expenses;
