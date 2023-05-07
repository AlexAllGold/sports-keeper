class BodyParser {
  parseBody(request) {
    const body = [];
    return new Promise((resolve, reject) => {
      if (request !== undefined) {
        request
          .on('error', (chunk) => {
            reject(chunk);
          })
          .on('data', (chunk) => {
            body.push(chunk);
          })
          .on('end', () => {
            const str = Buffer.concat(body).toString();
            resolve(JSON.parse(str));
          });
      }
    });
  }
}

export const bodyParser = new BodyParser();
