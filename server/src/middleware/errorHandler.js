export function errorHandler(err, req, res, next) {
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    error: statusCode === 404 ? "NotFound" : "ServerError",
    message: err.message || "Something went wrong",
  });
}
