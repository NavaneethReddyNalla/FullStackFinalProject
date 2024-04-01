const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(400).send({ message: "Error Occured" });
};

module.exports = errorHandler;
