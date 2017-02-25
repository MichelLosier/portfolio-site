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
	Project.find({ category: req.params.cat }, function(err, docs) {
		if(err) return console.error(err);
		res.json(docs);
	});
};

//get project by id
exports.queryID = function(req, res, next) {
	Project.findOne({_id: req.params._id}, function(err, doc){
		res.json(doc);
	});
};
