import mysql from 'mysql';

export class ClubService {
  #pool;

  constructor(pool) {
    if (pool instanceof mysql) {
      this.#pool = pool;
    }
  }

  getAll() {
    this.#pool.execute('SELECT * FROM clubs')
      .then((result) => {
        console.log(`${result.description}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
