class BodyParser {
  async parser(request) {
    let body = [];
    return new Promise((resolve, reject) => {
      try {
        request
          .on('data', (chunk) => {
            body.push(chunk);
          })
          .on('end', () => {
            body = Buffer.concat(body).toString();
          });
        resolve(body);
      } catch (err) {
        reject(err);
      }
    });
  }
}
export const bodyParser = new BodyParser();
