import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency._code, currency._name);
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._name} (${this._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
