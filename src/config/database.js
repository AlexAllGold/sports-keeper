import mysql from 'mysql';

const connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
});

connection.connect();

connection.query('SELECT * FROM clubs', (err, rows) => {
  if (err) throw err;
  console.log(`${rows.description}`);
});

connection.end();
