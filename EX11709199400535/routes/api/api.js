var express = require('express');
var router = express.Router();

var objetoRoutes = require('./objetos');

router.use('/objetos', personaRoutes);

module.exports = router;