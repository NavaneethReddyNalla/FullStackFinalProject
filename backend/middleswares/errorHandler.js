const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(400).send({ message: err.message, status: 0 });
};

module.exports = errorHandler;
