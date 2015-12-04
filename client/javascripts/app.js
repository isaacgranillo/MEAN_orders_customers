console.log('App.js loaded')

var ordercustAppModule = angular.module('ordercustApp', ['ngRoute']);

ordercustAppModule.config(function ($routeProvider){
	$routeProvider
	.when('/customers', {
		templateUrl: 'partials/customers.html'
	})

	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})

	.otherwise({
		redirectTo: '/customers'
	})
});