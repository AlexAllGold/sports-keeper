export function controllerWrapper(res, httpCodes, message) {
  res.statusCode = httpCodes;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
}
