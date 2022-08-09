import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";

function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2022, 2, 23), amount: "2332" },
    { title: "Car Battery", date: new Date(2022, 3, 22), amount: "232" },
    { title: "Bhosadpappu", date: new Date(2012, 2, 23), amount: "34" },
    { title: "RTX 3060ti", date: new Date(2022, 1, 10), amount: "23423" },
  ];
  return (
      <ExpenseList expenses={expenses} />
  );
}

export default App;
