class ExpenseView {
  constructor() {
    this.expenseList = document.getElementById("expense-list"); // Lista de transacciones en el DOM
    this.balance = document.getElementById("balance"); // Balance total
  }

  addExpenseToDOM(expense) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${expense.description} - ${expense.amount} 
      <button data-id="${expense.id}" class="delete-btn">Eliminar</button>`;
    this.expenseList.appendChild(listItem);
  }

  clearExpenses() {
    this.expenseList.innerHTML = "";
  }

  displayExpenses(expenses) {
    this.clearExpenses();
    expenses.forEach((expense) => this.addExpenseToDOM(expense));
  }

  updateBalance(total) {
    this.balance.innerText = `Balance: ${total}`;
  }

  bindAddExpense(handler) {
    document
      .getElementById("expense-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const description = document.getElementById("description").value;
        const amount = parseFloat(document.getElementById("amount").value);
        handler(description, amount);
      });
  }

  bindDeleteExpense(handler) {
    this.expenseList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        handler(id);
      }
    });
  }
}

export default ExpenseView;
