class View {
  constructor(manager) {
    this._manager = manager;
  }

  renderHeader() {
    const budget = this._manager.calculateBudget();
    const expensePercetage = this._manager.calculateExpensePercentage();
    document.getElementById("presupuesto").innerText = budget;
    document.getElementById("porcentaje").innerText = expensePercetage;
    document.getElementById("ingresos").innerText =
      this._manager.getTotalIncomes(true);
    document.getElementById("egresos").innerText =
      this._manager.getTotalExpense(true);
  }

  render() {
    this.renderHeader();
    this.renderIncomesList();
    this.renderExpensesList();
  }

  renderIncomesList() {
    document.getElementById("incomes-list").innerHTML =
      this._manager.getIncomesHTML();
  }

  renderExpensesList() {
    document.getElementById("expenses-list").innerHTML =
      this._manager.getExpenseHTML();
  }
}
