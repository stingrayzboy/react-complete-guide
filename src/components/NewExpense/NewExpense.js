import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onSavedExpense(expenseData);
  };
  const [formState, setFormState] = useState(true);

  const toggleForm = () => {
    setFormState((prevState) => !prevState);
  };

  if (formState) {
    return (
      <div className="new-expense">
        <button onClick={toggleForm}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={toggleForm}/>
    </div>
  );
};

export default NewExpense;
