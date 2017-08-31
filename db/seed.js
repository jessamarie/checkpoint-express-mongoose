const mongoose = require('mongoose')
const connect = require('./connection')
const authorSeeds = require('./seedAuthors')
var db = 'mongodb://localhost/authors'

const Author = mongoose.model('Author')

connect(db, { useMongoClient: true })
.then(_ => Author.remove({}))
.then(_ => Author.collection.insert(authorSeeds))
.then(authors => {
  console.log(authors)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
