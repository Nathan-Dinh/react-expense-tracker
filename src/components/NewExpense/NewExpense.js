import React, { useState } from "react";
import "./NewExpense.css";
import FormExpense from "./FormExpense.js";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      id: Math.random().toString(),
      ...enteredExpenseDate,
    };
    props.onAddExpense(expenseDate);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <FormExpense
          onCancel={stopEditingHandler}
          onSaveExpenseDate={saveExpenseDateHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
