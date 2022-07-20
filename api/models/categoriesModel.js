const db = require('../adapter')

function list () {
  return db.get('categories').value()
}

function findById ({ id }) {
  return db.get('categories')
    .find({ id: +id })
    .value()
}

module.exports = { list, findById }
