export function sendResponse(res, httpCodes, message) {
  res.statusCode = httpCodes;
  res.setHeader('Content-Type', 'text/plain');
  return res.end(message);
}
