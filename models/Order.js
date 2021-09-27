const { bookshelf } = require("../utils");

const Order = bookshelf.model('Order', {
  tableName: 'order'
});

module.exports = Order;
