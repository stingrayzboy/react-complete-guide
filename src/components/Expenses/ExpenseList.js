import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  const expenses = props.expenses;
  const [selectedDate, setSelectedDate] = useState("2020");
  const onSelectedExpenseDate = (dateSelected) => {
    setSelectedDate(dateSelected);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        baseDate={selectedDate}
        onSelectedExpenseDate={onSelectedExpenseDate}
      ></ExpensesFilter>
      {props.expenses.map((x) => {
        return (
          <ExpenseItem
            title={x.title}
            amount={x.amount}
            date={x.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default ExpenseList;
