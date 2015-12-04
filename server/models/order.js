var mongoose = require('mongoose');
var path = require('path');
var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	created: {type: Date, default: Date.now}


});

OrderSchema.path('name').required(true);
OrderSchema.path('product').required(true);
OrderSchema.path('quantity').required(true);

var Order = mongoose.model('Order', OrderSchema);







