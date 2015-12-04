var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		show: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results)
				}
			})
		},

		add: function(req, res){
			var customer = new Customer(req.body);
			customer.save(function(err){
				if(err){
					console.log('DATA DID NOT POST');
				}
				else{
					console.log('DATA POSTED');
					res.json({})
				}
			})
		},

		remove: function(req, res){
			Customer.remove({_id: req.params.id}, function(err){
				if(err){
					console.log('REMOVE NOT SUCCESSFUL')
				}
				else{
					console.log('DATA REMOVED')
					res.json({})
				}
			})
		}
	}
})();


