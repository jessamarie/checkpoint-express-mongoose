const express = require('express')
const router = express.Router()

const authors = require('../app/controllers/authors')

module.exports = router

router.param('_id', authors.load)
router.get('/authors', authors.index)
router.post('/authors', authors.create)
router.get('/authors/:_id', authors.show)
router.put('/authors/:_id', authors.update)
router.delete('/authors/:_id', authors.destroy)
