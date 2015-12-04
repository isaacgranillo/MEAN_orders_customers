var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {

		add: function(req, res){
			var order = new Order(req.body);
			order.save(function(err){
				if(err){
					console.log('DATA NOT POSTED')
				}
				else{
					console.log('DATA POSTED')
					res.json({})
				}
			})

		},

		show: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log(err)
				}
				else{
					res.json(results)
				}
			})

		},

		remove: function(req, res){
			Order.remove({_id:req.params.id}, function(err){
				if(err){
					console.log('NOT REMOVED')
				}
				else{
					console.log('REMOVED')
					res.json({})
				}
			})
		}
	}
})();







