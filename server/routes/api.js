const express = require('express');
const path = require('path');
const router = express.Router();
const projectCtrl = require('../controllers/projectController');

//get projects
router.get('/portfolio', projectCtrl.listAll);
router.get('/portfolio/:category', projectCtrl.categoryListAll);




module.exports = router;