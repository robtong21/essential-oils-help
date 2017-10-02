const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/essential-oils-help', {
    logging: false
  }
)
module.exports = db
