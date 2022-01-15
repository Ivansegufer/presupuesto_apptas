class Expense extends Movement {
  static contExpenses = 0;

  constructor(description, value) {
    super(description, value);
    this._id = ++Expense.contExpenses;
  }

  get id() {
    return this._id;
  }
}
