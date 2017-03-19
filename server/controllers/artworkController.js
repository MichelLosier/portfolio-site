var Artwork = require('../models/artwork');

//get artwork by project id
exports.queryByProject = function(req, res, next) {
	Artwork.find({projects:[req.query._id]}, function(err, docs){
		if(err) return console.error(err);
		res.json(docs);
	});
};
//get artwork by id
exports.queryID = function(req, res, next) {
	Artwork.findOne({_id:req.params._id}, function(err, doc){
		res.json(doc);
	});
};

//create new artwork
exports.createArtwork = function(req, res, next){
	var _artwork = new Artwork(req.body);
	_artwork.save(function(err, _artwork){
		if(err) return console.error(err);
		res.sendStatus(200).json(_artwork);
	});
}

//update artwork
exports.updateArtwork = function(req, res, next){
	Artwork.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
		if(err) return console.error(err);
		res.sendStatus(200);
	});
}

//delete artwork
exports.deleteArtwork = function(req, res, next){
	Artwork.findOneAndRemove({_id: req.params.id}, function(err){
		if(err) return console.error(err);
		res.sendStatus(200);
	});
}
