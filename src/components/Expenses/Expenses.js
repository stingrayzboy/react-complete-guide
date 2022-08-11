import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
  }
  return(
    <ul className="expenses-list">
        {
            props.items.map((x) => {
                return (
                  <ExpenseItem
                    key={x.id}
                    title={x.title}
                    amount={x.amount}
                    date={x.date}
                  ></ExpenseItem>
                );
              })
        }
    </ul>
  );
};

export default Expenses;
