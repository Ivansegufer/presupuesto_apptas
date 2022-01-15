class CurrencyFormat {
  static formatSettings = {
    "en-US": {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    },
    "es-ES": {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    },
  };

  static getFormat(value, format) {
    if (this.formatSettings.hasOwnProperty(format))
      return value.toLocaleString(format, this.formatSettings[format]);
    return "NO_VALID_FORMAT";
  }
}
