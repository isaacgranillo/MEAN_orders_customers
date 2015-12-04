var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){

	app.get('/customers', function(req, res){
		customers.show(req, res);
	});

	app.post('/addcustomer', function(req, res){
		customers.add(req, res);
	});

	app.delete('/customers/:id', function(req, res){
		customers.remove(req, res);
	})

	app.post('/addorder', function(req, res){
		orders.add(req, res);
	})

	app.get('/orders', function(req, res){
		orders.show(req, res);
	})

	app.delete('/orders/:id', function(req, res){
		orders.remove(req, res);
	})
}