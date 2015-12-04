var mongoose = require('mongoose');
var path = require('path');
var CustomerSchema = new mongoose.Schema({
	name: String,
	created: {type: Date, default: Date.now}
});

CustomerSchema.path('name').required(true);

var Customer = mongoose.model('Customer', CustomerSchema);


