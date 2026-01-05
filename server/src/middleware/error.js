export function errorHandler(err, _req, res, _next) {
  if (err.code === 11000) {
    return res.status(409).json({
      ok: false,
      message: "email is already registered",
    });
  }

  const status = err.status || 500;

  res.status(status).json({
    ok: false,
    message: err.message || "Server error",
  });
}
