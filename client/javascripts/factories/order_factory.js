console.log('order factory loaded')

ordercustAppModule.factory('orderFactory', function($http){

	var factory = {};

	factory.addOrder = function(newOrder, callback){
		$http.post('/addorder', newOrder).success(function(output){
			callback();
		})
	}

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			callback(output);
		})
	}

	factory.removeOrder = function(orderID, callback){
		$http.delete('/orders/' + orderID).success(
			function(output){
			callback();
		})
	}

	return factory



})


