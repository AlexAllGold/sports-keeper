export class ClubService {
  getAll(pool) {
    return pool.execute('SELECT * FROM clubs')
      .then((result) => {
        console.log(`${result.description}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
export const clubService = new ClubService();
