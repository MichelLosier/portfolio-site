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
		if(err) return console.error(err);
		res.json(doc);
	});
};

//create new project
exports.createProject = function(req, res, next){
	var _project = new Project(req.body);
	_project.save(function(err, project){
		if(err) return console.error(err);
		res.status(200).json(project);
	});
}

//update project
exports.updateProject = function(req, res, next){
	Project.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
		if(err) return console.error(err);
		res.sendStatus(200);
	});
}

//delete project
exports.deleteProject = function(req, res, next){
	Project.findOneAndRemove({_id: req.params.id}, function(err){
		if(err) return console.error(err);
		res.sendStatus(200);
	});
}