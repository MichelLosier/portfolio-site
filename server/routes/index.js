const express = require('express');
const path = require('path');
const router = express.Router();
const indexPath = "../../dist/index.html";

router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, indexPath))
})

module.exports = router;