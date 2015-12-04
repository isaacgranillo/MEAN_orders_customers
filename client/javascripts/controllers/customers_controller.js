console.log('customers controller loaded')

ordercustAppModule.controller('CustomersController', function(customerFactory){
	var self = this;

	this.addCustomer = function(newCustomer){
		customerFactory.addCustomer(newCustomer, function(){
			customerFactory.getCustomers(function(data){
				self.customers = data;
			})
		})
		this.newCustomer = {};
	}

	customerFactory.getCustomers(function(data){
		self.customers = data;
	})

	this.removeCustomer = function(customerID){
		customerFactory.removeCustomer(customerID, function(){
			customerFactory.getCustomers(function(data){
				self.customers = data;
			})
		})
	}
})