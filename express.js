const express = require('express')
const bodyParser = require('body-parser')

module.exports = function expressConfig (app) {
  app.use(bodyParser.json())
}
