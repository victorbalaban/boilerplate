var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.findAll);
router.get('/:id', user.findById);
router.post('/', user.create);
router.put('/',user.update);
router.delete('/:id', user.delete);

module.exports = router;
