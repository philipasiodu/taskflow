export function healthCheck(req, res) {
  res.json({
    status: "ok",
    message: "TaskFlow API is healthy",
    timestamp: new Date().toISOString(),
  });
}
