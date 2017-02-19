var Project = require('../models/project');

//get all projects
exports.listAll = function(req, res, next){
	Project.find({}, function(err, docs) {
		if(err) return console.error(err);
		res.json(docs);
	});
};
//get all projects by category type
exports.categoryListAll = function (req, res, next) {
	Project.find({ category: req.params.category }, function(err, docs) {
		if(err) return console.error(err);
		res.json(docs);
	});
};

