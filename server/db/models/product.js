'use strict'

const {STRING, TEXT, INTEGER, ARRAY, FLOAT} = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: STRING,
  type: STRING,
  rank: INTEGER,
  notes: STRING,
  summary: TEXT,
  description: TEXT,
  benefits: ARRAY(STRING),
  uses: ARRAY(STRING),
  directions: ARRAY(STRING),
  photo: TEXT,
  thumb: STRING,
  unit: STRING,
  retail: FLOAT,
  wholesale: FLOAT,
  pv: FLOAT,
  aroma: STRING,
  collection: STRING,
  plant: STRING,
  constituents: STRING,
  cautions: STRING
})

module.exports = Product

// module.exports.associations = (Product, {Cart}) => {
//   // Availability.belongsTo(Home)
//   Product.belongsToMany(Cart, {through: 'guest_cart_items'})
// }
