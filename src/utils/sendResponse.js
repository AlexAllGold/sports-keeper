export function sendResponse(res, httpCodes, message) {
  res.statusCode = httpCodes;
  res.setHeader('Content-Type', 'application/json');
  return res.end(message);
}
