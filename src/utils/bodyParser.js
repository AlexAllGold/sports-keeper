class BodyParser {
  parseBody(request) {
    const body = [];
    return new Promise((resolve, reject) => {
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
          // at this point, body has the entire request body stored in it as a string
        });
    });
  }
}
//   async parser(request) {
//     let body = [];
//     return new Promise((resolve, reject) => {
//       request
//         .on('data', (chunk) => {
//           body.push(chunk);
//         })
//         .on('error', (error) => {
//           reject(error);
//         })
//         .on('end', () => {
//           body = Buffer.concat(body).toString();
//           resolve(body);
//         });
//     });
//   }
// }

export const bodyParser = new BodyParser();
