var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: String,
	position: Number,
	dateAdded: { type: Date, default: Date.now },
	description: String,
	featuredImage: String,
	category: String,
	tags: [String],
	gallery: [String]
});

var Project = mongoose.model('project', projectSchema);

module.exports = Project;