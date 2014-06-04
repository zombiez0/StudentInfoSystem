
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	name : String,
	picture : Buffer,
	age : Number,
	updated: { type: Date, default: Date.now },
	registerNum : Number,
	address : String,
	grade : String,
	leader : Boolean
})

module.exports = mongoose.model('Student', StudentSchema);