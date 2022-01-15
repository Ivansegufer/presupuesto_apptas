class MovementManager {
  constructor() {
    this._incomes = [
      new Income("Salario", 2100.0),
      new Income("Venta carro", 1560.0),
    ];
    this._expenses = [
      new Expense("Renta departamento", 400.0),
      new Expense("Ropa", 200.0),
    ];
  }

  getTotalIncomes(formatted = false) {
    let total = 0;
    this._incomes.forEach((income) => {
      total += income.value;
    });
    if (formatted) return CurrencyFormat.getFormat(total, "en-US");
    return total;
  }

  getTotalExpense(formatted = false) {
    let total = 0;
    this._expenses.forEach((expense) => {
      total += expense.value;
    });
    if (formatted) return CurrencyFormat.getFormat(total, "en-US");
    return total;
  }

  calculateBudget() {
    return CurrencyFormat.getFormat(
      this.getTotalIncomes() - this.getTotalExpense(),
      "en-US"
    );
  }

  calculateExpensePercentage() {
    let totalPercentage = this.getTotalExpense() / this.getTotalIncomes();

    if (isNaN(totalPercentage)) totalPercentage = 0;

    return totalPercentage.toLocaleString("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
    });
  }

  getIncomesHTML() {
    let incomesHTML = "";
    this._incomes.forEach((income) => {
      incomesHTML += HTMLCreator.createIncomeHTML(income);
    });

    return incomesHTML;
  }

  getExpenseHTML() {
    let expenseHTML = "";
    const totalIncomes = this.getTotalIncomes();
    this._expenses.forEach((expense) => {
      expenseHTML += HTMLCreator.createExpenseHTML(
        expense,
        (expense.value / totalIncomes).toLocaleString("en-US", {
          style: "percent",
          minimumFractionDigits: 2,
        })
      );
    });

    return expenseHTML;
  }

  deleteItem(fullid) {
    const [type, id] = fullid.split("-");

    if (type === "income") {
      const index = this._incomes.findIndex(
        (income) => income.id === Number(id)
      );
      this._incomes.splice(index, 1);
      return;
    }
    const index = this._expenses.findIndex(
      (expense) => expense.id === Number(id)
    );
    this._expenses.splice(index, 1);
  }

  addItem(type, description, value) {
    let valueNumber = Number(value);
    if (valueNumber < 0) valueNumber *= -1;

    if (description !== "" && valueNumber !== 0) {
      if (type === "income")
        this._incomes.push(new Income(description, valueNumber));
      else this._expenses.push(new Expense(description, valueNumber));
      return;
    }
    alert("Ingrese una descripcion o un valor válido");
  }
}
