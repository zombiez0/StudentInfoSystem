var app = angular.module('studentApp', ['ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url : '/home',
			templateUrl : '/html/home.html'
		})
		.state('events', {
			url : '/events',
			templateUrl : '/html/events.html'			
		})
		.state('about', {
			url : '/about'
		})		

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
});

app.run(function($rootScope) {
	$rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
                console.log("State Change: transition begins!");
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){ 
                console.log("State Change: State change success!");
        });

    $rootScope
        .$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams){ 
                console.log("State Change: Error!");
        });

    $rootScope
        .$on('$stateNotFound',
            function(event, toState, toParams, fromState, fromParams){ 
                console.log("State Change: State not found!");
        });

    $rootScope
        .$on('$viewContentLoaded',
            function(event, viewConfig){ 
                console.log("View Load: the view is loaded, and DOM rendered!");
        });
});

app.controller('appController', function($scope) {
	
});

app.controller('studentListController', function($scope) {
	
});

app.controller('eventListController', function($scope) {

})
	


/* Sticky Header */
var $menu = document.querySelector('#nav-menu');
window.onscroll = function() {
	if(window.pageYOffset > 60){
		$menu.className = "menu cf menu-sticky";
	}else{
		$menu.className = "menu cf";
	}
}