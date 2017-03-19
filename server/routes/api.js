const express = require('express');
const path = require('path');
const router = express.Router();
const projectCtrl = require('../controllers/projectController');
const artworkCtrl = require('../controllers/artworkController');

//project collection

//get projects
router.get('/projects', projectCtrl.listAll);
router.get('/projects/id/:_id', projectCtrl.queryID);
router.get('/projects/category/:cat', projectCtrl.categoryListAll);

//post projects
router.post('/projects', projectCtrl.createProject);

//push projects
router.put('/projects/id/:_id', projectCtrl.updateProject);

//delete projects
router.delete('/projects/id/:_id', projectCtrl.deleteProject);


//artwork collection

//get artwork
router.get('/artwork/id/:_id', artworkCtrl.queryID);
router.get('/artwork/project/:_id', artworkCtrl.queryByProject);

//post artwork
router.post('/artwork', artworkCtrl.createArtwork);

//push artwork
router.put('/artwork/id/:_id', artworkCtrl.updateArtwork);

//delete artwork
router.delete('/projects/id/:_id', artworkCtrl.deleteArtwork);

module.exports = router;