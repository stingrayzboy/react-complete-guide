import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_DATA = [
  { id:"e1", title: "Car Insurance", date: new Date(2022, 2, 23), amount: "2332" },
  { id:"e2", title: "Car Battery", date: new Date(2022, 3, 22), amount: "232" },
  { id:"e3", title: "Bhosadpappu", date: new Date(2012, 2, 23), amount: "34" },
  { id:"e4", title: "RTX 3060ti", date: new Date(2022, 1, 10), amount: "23423" },
];
const App = () => {
  const [expenses, setStateExpenses] = useState(DUMMY_DATA);

  const onAddExpense = (data) => {
    setStateExpenses((prevExpenses)=>{ return [data, ...prevExpenses]});
  };
  return (
    <div>
      <NewExpense onSavedExpense={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
