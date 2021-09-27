const express = require('express');

const { customerRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => res.json('Pong'));

app.use('/customers', customerRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(5000, () => {
  console.log('App listen', 5000);
});

function _notFoundError(err, req, res, next) {
  next({
    status: err.status || 404,
    message: err.message || "NOT FOUND"
  });
}

function _mainErrorHandler(err, req, res, next) {
  res
      .status(500)
      .json({
        message: err.message
      });
}
