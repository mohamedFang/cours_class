export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(new Error(err));
    });
  };
};

const globalErrorHandling = (err, req, res, next) => {
  if (err) {
    if (process.env.MOOD === "DEV") {
      return res
        .status(err.cause || 500)
        .json({ message: err.message, err: err.stack });
    } else {
      return res
        .status(err.cause || 500)
        .json({ message: err.message });
    }
  }
};

export default globalErrorHandling;
