const express = require('express');
const path = require('path');
const router = express.Router();
const projectCtrl = require('../controllers/projectController');
const artworkCtrl = requiire('../controllers/artworkController');

//get projects
router.get('/projects', projectCtrl.listAll);
router.get('/projects/:category', projectCtrl.categoryListAll);
router.get('/projects/:id', projectCtrl.queryID);

//get artwork
router.get('/artwork/:id', artworkCtrl.queryID);
router.get('/artwork/:project', artworkCtrl.queryProject);



module.exports = router;