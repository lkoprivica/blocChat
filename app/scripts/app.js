//define and angular module for my application, include ui-router and firebase as dependencies, and define your first state which will hold the main view for the chat application. Add ngApp directive to the HTML tag to initialize the applications scope in your HTML
(function() {

    function config($stateProvider, $locationProvider) {

		$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
		
		$stateProvider
         .state('index', {
             url: '/',
             controller: 'RoomCtrl',
             templateUrl: '/templates/room.html'
         })
			
    };

     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);  
})();