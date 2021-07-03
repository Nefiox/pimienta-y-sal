var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController')

/* GET home page. */
router.get('/', menuController.listMeals);

module.exports = router;