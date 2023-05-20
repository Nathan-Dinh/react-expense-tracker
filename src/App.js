import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expenses"; //Imports function from Expense
import NewExpense from "./components/NewExpense/NewExpense";
import Header from "./components/Header/Header"; //Imports function from Header
import Footer from "./components/Footer/Footer";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  //This is how we use to write react before jsx became a thing. We stil use this but the people who created react abstracted so it's done under the hood instead.
  //This is what is happening when we return using jsx syntax

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { expense: EXPENSE })
  // );

  return (
    <div>
      <Header/>
      <main className="Main">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expense items={expenses} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
