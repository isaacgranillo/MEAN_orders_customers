console.log('orders controller loaded')

ordercustAppModule.controller('OrdersController', function(customerFactory, orderFactory){
	var self = this;

	this.addOrder = function(newOrder){
		orderFactory.addOrder(newOrder, function(){

			orderFactory.getOrders(function(data){
				self.orders = data;
			})
		})

		this.newOrder = {}
		}

		orderFactory.getOrders(function(data){
			self.orders = data;
		})

		customerFactory.getCustomers(function(data){
			self.customers = data;
		})

		this.removeOrder = function(orderID){
			orderFactory.removeOrder(orderID, function(){
				orderFactory.getOrders(function(data){
					self.orders = data;
				})
			})
		}

	})



