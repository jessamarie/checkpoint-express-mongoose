const mongoose = require('mongoose')
var db = 'mongodb://localhost/authors'

mongoose.Promise = global.Promise

require('../app/models/author.js')

module.exports = {
  mongoose: mongoose,
  connect: connect
}

function connect () {
  const options = {
    useMongoClient: true,
    keepAlive: 1
  }
  return mongoose.connect(db, options)
}
