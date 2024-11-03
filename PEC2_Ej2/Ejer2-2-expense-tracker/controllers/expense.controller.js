import ExpenseService from "../services/expense.service.js";
import ExpenseView from "../views/expense.view.js";

class ExpenseController {
  constructor() {
    this.service = new ExpenseService();
    this.view = new ExpenseView();

    // Enlazamos los eventos de la vista con los métodos del servicio.
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);

    // Mostramos los gastos iniciales en el DOM
    this.displayExpenses();
    this.updateBalance();
  }

  // Método para manejar la adición de un gasto
  handleAddExpense = (description, amount) => {
    const expense = this.service.addExpense(description, amount);
    this.view.addExpenseToDOM(expense);
    this.updateBalance();
  };

  // Método para manejar la eliminación de un gasto
  handleDeleteExpense = (id) => {
    this.service.deleteExpense(id);
    this.displayExpenses();
    this.updateBalance();
  };

  // Método para mostrar los gastos actuales en el DOM
  displayExpenses() {
    this.view.displayExpenses(this.service.getExpenses());
  }

  // Método para actualizar el balance total
  updateBalance() {
    const total = this.service
      .getExpenses()
      .reduce((acc, expense) => acc + expense.amount, 0);
    this.view.updateBalance(total);
  }
}

export default ExpenseController;
