const express = require('express');
const path = require('path');
const router = express.Router();
const projectCtrl = require('../controllers/projectController');
const artworkCtrl = require('../controllers/artworkController');

//get projects
router.get('/projects', projectCtrl.listAll);
router.get('/projects/id/:_id', projectCtrl.queryID);
router.get('/projects/category/:cat', projectCtrl.categoryListAll);

//get artwork
router.get('/artwork/id/:_id', artworkCtrl.queryID);
router.get('/artwork/project/:_id', artworkCtrl.queryProject);



module.exports = router;