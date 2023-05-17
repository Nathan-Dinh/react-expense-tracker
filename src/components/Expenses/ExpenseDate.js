import React from 'react';
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const MONTH = props.date.toLocaleString("en-US", { month: "long" });
  const YEAR = props.date.getFullYear();
  const DAY = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{MONTH}</div>
      <div className="expense-date__year">{YEAR}</div>
      <div className="expense-date__date">{DAY}</div>
    </div>
  );
}

export default ExpenseDate;
