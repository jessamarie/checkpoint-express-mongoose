const mongoose = require('mongoose')
const Author = mongoose.model('Author')

module.exports = {
  load: function (req, res, next, _id) {
    console.log(_id)
    Author.findOne({_id: _id})
    .then(author => {
      req.author = author
      console.log(author)
      if (!req.author) {
        return next(new Error('Author not found'))
      }
      next()
    })
    .catch((err) => { next(err) })
  }, // end load

  index: function (req, res, next) {
    Author.find({})
    .then((authors) => { res.json(authors) })
    .catch((err) => { next(err) })
  },

  show: function (req, res) {
    res.json(req.author)
  },

  create: function (req, res) {
    const author = new Author(req.body)
    author.save()
    .then((author) => { res.json(author) })
    .catch((err) => {
      res.json({
        message: `Error creating author`,
        errors: [err.toString()]
      })
    })
  },

  update: function (req, res) {
    const author = req.author
    Object.assign(author, req.body)
    author.save
    .then((todo) => { res.json(todo) })
    .catch((err) => {
      res.json({
        message: `Error updating author: ${author._id}`,
        errors: [err.toString()]
      })
    })
  },

  destroy: (req, res) => {
    req.author.remove()
    .then(_ => res.json({
      message: 'Author deleted'
    }))
  }
}
