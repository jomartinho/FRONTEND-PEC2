import Expense from "../models/expense.model.js";

class ExpenseService {
  constructor() {
    this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  }

  addExpense(description, amount) {
    const id = Date.now();
    const expense = new Expense(id, description, amount);
    this.expenses.push(expense);
    this.updateLocalStorage();
    return expense;
  }

  getExpenses() {
    return this.expenses;
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
    this.updateLocalStorage();
  }

  updateExpense(id, updatedData) {
    const expenseIndex = this.expenses.findIndex(
      (expense) => expense.id === id
    );
    if (expenseIndex !== -1) {
      this.expenses[expenseIndex] = {
        ...this.expenses[expenseIndex],
        ...updatedData,
      };
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }
}

export default ExpenseService;
