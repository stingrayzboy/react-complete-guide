import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseList.css";
import Expenses from "./Expenses";
import ExpensesChart from "./ExpensesChart";
const ExpenseList = (props) => {
  const [selectedDate, setSelectedDate] = useState("2020");
  const onSelectedExpenseDate = (dateSelected) => {
    setSelectedDate(dateSelected);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedDate
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        baseDate={selectedDate}
        onSelectedExpenseDate={onSelectedExpenseDate}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}/>
      <Expenses items={filteredExpenses}></Expenses>
    </Card>
  );
};

export default ExpenseList;
