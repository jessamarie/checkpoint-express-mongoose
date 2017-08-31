const express = require('express')
const connection = require('./db/connection')
console.log(connection);
const port = process.env.PORT || 4000
const app = express()

module.exports = app

// Configuration for app and routes
require('./routes')(app)
require('./express')(app)

cconnect()
  .then(db => {
    db.on('error', console.log)
    listen()
  })
  .catch(err => {
    console.log(`Error connecting to mongo`)
    console.log(err)
  })

function listen () {
  app.listen(port)
  console.log(`Listening on port ${port}`)
}
