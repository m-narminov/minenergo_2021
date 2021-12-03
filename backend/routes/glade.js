var express = require('express')
const GladeController = require('../controllers/GladeController')

var router = express.Router()

router.get('/export', GladeController.gladeExport)
router.get('/', GladeController.gladeList)
router.get('/:id', GladeController.gladeDetail)
router.post('/', GladeController.gladeCreate)
router.put('/:id', GladeController.gladeUpdate)
router.delete('/:id', GladeController.gladeDelete)

module.exports = router
