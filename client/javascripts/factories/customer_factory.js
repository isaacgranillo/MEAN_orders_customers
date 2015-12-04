console.log('customer factory loaded')

ordercustAppModule.factory('customerFactory', function($http){
	var factory = {};

	factory.addCustomer = function(newCustomer, callback){
		console.log('*************')
		$http.post('/addcustomer', newCustomer).success(function(output){
			callback();
		})
	}

	factory.getCustomers = function(callback){
		$http.get('/customers').success(function(output){
			callback(output);
		})
	}

	factory.removeCustomer = function(customerID, callback){
		$http.delete('/customers/' + customerID).success(function(output){
			callback();
		})
	}

	return factory
});