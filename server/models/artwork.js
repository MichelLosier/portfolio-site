var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artworkSchema = new Schema({
	projects: [String],
	dateAdded: { type: Date, default: Date.now },
	location: String,
	preview: String,
	normal: String,
	large: String,
	caption: String,
	description: String,
	altText: String
});

var Artwork = mongoose.model('artwork', artworkSchema);
module.exports = Artwork;