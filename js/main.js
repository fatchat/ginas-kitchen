/**
 * @brief Angular application entry point
 */

var app = angular.module('gkApp', []);

// Set up routing
app.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl	: 'templates/home.html',
			controller 	: 'MainController'
		})

		.when('/about', {
			templateUrl : 'templates/about.html',
			controller 	: 'AboutController'
		})

		.when('/products', {
			templateUrl : 'templates/products.html',
			controller 	: 'ProductsController'
		})

		.when('/events', {
			templateUrl : 'templates/events.html',
			controller 	: 'EventsController'
		})

		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller 	: 'ContactController'
		})

		;
});

// Main Controller
app.controller('MainController', function($scope) {

	$scope.heading="Welcome to Gina's Kitchen";

	// This could be read from a DB. Editing the text requires a separate and secured access point
	$scope.paras = [
		"I have always enjoyed feeding and entertaining people in my home. My friends and family were constantly after me to make desserts and different continental dishes to send to their homes.",
		"In 2010, my husband and I finally decided to turn it into a business. Since my children required a lot of my time I decided to work from home. In this way \"Gina\'s Kitchen\" was born - allowing me to be at home and do the things I love.",
		"Gina\'s Kitchen is a made-to-order catering service. Since everything that comes out of Gina\'s Kitchen is made from the freshest ingredients, I require 24 hrs prior notice for an order."
	];
});

// About Us Controller
app.controller('AboutController', function($scope) {

	// This could be read from a DB. Editing the text requires a separate and secured access point
	$scope.paras = [
		"Gina's Kitchen is very well known for its desserts and baked items. A few things on our menu in the way of baked dishes are lasagna, different types of quiches, pizzas, gratins and enchiladas. Our desserts menu is extremely long but some of our hottest selling items are chocolate mousse cake, double chocolate fudgy brownies, a variety of pies, soufflés, cheesecakes and black forest trifle. Besides this we do dips and have a huge range of salads.",
		"A lot of ingredients we use are imported, for example our \"herb de provence salad\". This is an exotic salad for a hot summer day. We are in the process of putting together a \"Children\"s menu\". We already have a wide variety of cupcakes, cookies, baby quiches, and baby pizzas.",
		"Gina's kitchen is unique and we make sure that all the food coming out of Gina's kitchen is fresh and wholesome and definitely delicious.",
		"We hope that maybe one day we will have a little café our own but for now \"Gina's kitchen\" is where \"Gina\" is at!!"
	];
});

// Products Controller
app.controller('ProductsController', function($scope) {

});

// Events Controller
app.controller('EventsController', function($scope) {

});


// Contact Us Controller
app.controller('ContactController', function($scope) {

	// handle form submission here
});

