class ExpenseView {
  constructor() {
    this.expenseList = document.getElementById("expense-list"); // Lista de transacciones en el DOM
    this.balance = document.getElementById("balance"); // Balance total
  }

  // Método para mostrar un gasto en la lista
  addExpenseToDOM(expense) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${expense.description} - ${expense.amount} 
      <button data-id="${expense.id}" class="delete-btn">Eliminar</button>`;
    this.expenseList.appendChild(listItem);
  }

  // Método para limpiar la lista de gastos en el DOM
  clearExpenses() {
    this.expenseList.innerHTML = "";
  }

  // Método para mostrar todos los gastos en el DOM
  displayExpenses(expenses) {
    this.clearExpenses();
    expenses.forEach((expense) => this.addExpenseToDOM(expense));
  }

  // Método para actualizar el balance total
  updateBalance(total) {
    this.balance.innerText = `Balance: ${total}`;
  }

  // Método para enlazar el evento de agregar gasto
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

  // Método para enlazar el evento de eliminar gasto
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
