const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})

mongoose.model('Author', AuthorSchema)
