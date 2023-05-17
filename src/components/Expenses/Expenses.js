import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem"; //Imports function from ExpenseItem.js in component
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../FilterExpenses/FilterExpenses";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const saveFilteredYearHandler = (year) => {
    setFilteredYear(year);
  };

  const FILTERED_EXPENSES = props.items.filter((expenseItem) => {
    return expenseItem.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onSaveFilteredYear={saveFilteredYearHandler}
        />
        <ExpensesChart expenses={FILTERED_EXPENSES}/>
        <ExpensesList items={FILTERED_EXPENSES}/>
      </Card>
    </div>
  );
};

export default Expense;
