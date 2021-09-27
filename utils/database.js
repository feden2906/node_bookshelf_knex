const knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'ks-store'
  }
});

bookshelf = require('bookshelf')(knex);

// Bookshelf supported plugins.
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;
