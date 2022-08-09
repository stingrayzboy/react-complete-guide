import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);

  console.log("Element Evaluated.")

  const clickHandler = () => {
    setTitle("Boom")
    console.log(title)
  }


  const expenseAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
