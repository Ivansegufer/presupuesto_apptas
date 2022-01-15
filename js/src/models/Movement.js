class Movement {
  constructor(description, value) {
    this._description = description;
    this._value = value;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this.description = description;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (isNaN(value)) {
      alert("Ingrese un número");
      return;
    }
    this._value = value;
  }
}
