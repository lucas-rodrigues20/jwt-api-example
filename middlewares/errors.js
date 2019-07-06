exports.pageNotFound = (req, res, next) => {
  
  const err = new Error("Page Not Found.");
  err.status = 404;

  next(err);

};

exports.defaultErrorHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ status: err.status || 500, message: err.message });
};
