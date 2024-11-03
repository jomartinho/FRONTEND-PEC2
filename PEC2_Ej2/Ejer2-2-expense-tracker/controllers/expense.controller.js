import ExpenseService from "../services/expense.service.js";
import ExpenseView from "../views/expense.view.js";

class ExpenseController {
  constructor() {
    this.service = new ExpenseService();
    this.view = new ExpenseView();

    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);

    this.displayExpenses();
    this.updateBalance();
  }

  handleAddExpense = (description, amount) => {
    const expense = this.service.addExpense(description, amount);
    this.view.addExpenseToDOM(expense);
    this.updateBalance();
  };

  handleDeleteExpense = (id) => {
    this.service.deleteExpense(id);
    this.displayExpenses();
    this.updateBalance();
  };

  displayExpenses() {
    this.view.displayExpenses(this.service.getExpenses());
  }

  updateBalance() {
    const total = this.service
      .getExpenses()
      .reduce((acc, expense) => acc + expense.amount, 0);
    this.view.updateBalance(total);
  }
}

export default ExpenseController;
