const Sequelize  = require('sequelize');
const database = new Sequelize('cell5api', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
  });


try {
database.authenticate();
console.log('Connection has been established successfully.');
} catch (error) {
console.error('Unable to connect to the database:', error);
}

database.sync();

module.exports = database;
