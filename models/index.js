//const dbConfig = require("../db.config.js");

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Pass2020!:5432/messagerdatabase');

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.message = require("./message.js")(sequelize, Sequelize);

module.exports = sequelize;