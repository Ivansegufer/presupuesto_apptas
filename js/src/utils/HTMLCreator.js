class HTMLCreator {
  static createIncomeHTML(income) {
    const incomeHTML = `
            <div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${income.description}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">+ ${CurrencyFormat.getFormat(
                      income.value,
                      "en-US"
                    )}</div>
                    <div class="elemento_eliminar">
                        <button id="income-${
                          income.id
                        }" class="elemento_eliminar--btn">
                            <ion-icon id="income-${
                              income.id
                            }" name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        `;
    return incomeHTML;
  }

  static createExpenseHTML(expense, percent) {
    let expenseHTML = `
            <div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${expense.description}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">- ${CurrencyFormat.getFormat(
                      expense.value,
                      "en-US"
                    )}</div>
                    <div class="elemento_porcentaje">${percent}</div>
                    <div class="elemento_eliminar">
                        <button id="expense-${
                          expense.id
                        }" class="elemento_eliminar--btn">
                            <ion-icon id="expense-${
                              expense.id
                            }" name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        `;
    return expenseHTML;
  }
}
