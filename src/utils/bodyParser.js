class BodyParser {
  async parser(request) {
    let body = [];
    return new Promise((resolve, reject) => {
      request
        .on('data', 'error', (data, error) => {
          reject(error);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
        });
      resolve(body);
    });
  }
}

export const bodyParser = new BodyParser();
