var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Artwork = require ('./artwork');

var projectSchema = new Schema({
	name: String,
	position: Number,
	dateAdded: { type: Date, default: Date.now },
	description: String,
	featuredImage: {type: Schema.Types.ObjectId, ref: 'artwork'},
	category: String,
	tags: [String],
	gallery: [{type: Schema.Types.ObjectId, ref: 'artwork'}]
});

var Project = mongoose.model('project', projectSchema);

module.exports = Project;