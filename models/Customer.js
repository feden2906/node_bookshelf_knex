const { bookshelf } = require("../utils");

const Customer = bookshelf.model('Customer', {
  tableName: 'customer',
  orders() {
    return this.hasMany("Order");
  }
});

module.exports = Customer;
