import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 1st 2022</div>
      <div className="expense-item__description">
        <h2>Mortgage</h2>
        <div className="expense-item__price">$2700</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
