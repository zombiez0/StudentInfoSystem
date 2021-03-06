var app = angular.module('studentApp', ['ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url : '/home',
			templateUrl : '/html/home.html',
			controller : 'studentListController'

		})
		.state('events', {
			url : '/events',
			templateUrl : '/html/events.html',
			controller : 'eventListController'			
		})
		.state('about', {
			url : '/about',
			templateUrl : '/html/about.html',
			controller : 'aboutController'
		})
        .state('login', {
            url : '/login',
            templateUrl : '/html/login.html',
            controller : 'loginController'
        })		

		// use the HTML5 History API
		$locationProvider.html5Mode(true).hashPrefix('!');
});

app.run(function($rootScope) {
	$rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){
            	$rootScope.$activeTab = toState.url;
                console.log("State Change: transition begins!");

                var title, description;
                switch($rootScope.$activeTab) {
                	case '/home' :  title = 'Home';
                					description = 'Welcome to Student Information System by chetananand for SEO, studentinfosysapp';
                					break;

                	case '/events' :  title = 'Events';
                					description = 'Welcome to Student Information System by chetananand for SEO, studentinfosysapp - Events page'
                					break;
                					
                	case '/about' :  title = 'About';
                					description = 'Welcome to Student Information System by chetananand for SEO - About';
                					break;									
                }


                $rootScope.seo = {
			        pageTitle : title,
			        metaDescription: description
    			};
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
	console.log("inside home controller");
});

app.controller('studentListController', function($scope) {
	console.log("inside student controller");
});

app.controller('eventListController', function($scope) {
	console.log("inside event controller");
});

app.controller('aboutController', function($scope) {
	console.log("inside about controller");
});

app.controller('loginController', function($scope) {
    console.log("inside login controller");
})
	


/* Sticky Header */
var $menu = document.querySelector('#nav-menu');
window.onscroll = function() {
	if(window.pageYOffset > 65){
		$menu.className = "menu cf menu-sticky";
	}else{
		$menu.className = "menu cf";
	}
}