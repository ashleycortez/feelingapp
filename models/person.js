var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//See http://mongoosejs.com/docs/schematypes.html

var moodSchema = new Schema({
	date: String,
	location: Number,
	want: String,
	strengthofwant: Number,
	wantcolor: String,
	need: String,
	strengthofneed: Number,
	needcolor: String,
	have: String,
	strengthofhave: Number,
	havecolor: String,
	dateAdded : { type: Date, default: Date.now },
})

module.exports = mongoose.model('Mood',moodSchema);