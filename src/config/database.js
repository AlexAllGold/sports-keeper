import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alex',
  password: '3b1o4cn7334721'
});

connection.connect();

connection.query('SELECT * FROM clubs', (err, rows) => {
  if (err) throw err;
  console.log(`${rows.description}`);
});

connection.end();
