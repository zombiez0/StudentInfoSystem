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

		// use the HTML5 History API
		$locationProvider.html5Mode(true).hashPrefix('!');
});

app.run(function($rootScope) {
	$rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){
            	$rootScope.$activeTab = toState.url;
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
	console.log("inside home controller");
	$scope.$parent.seo = {
        pageTitle : 'studentinfosysapp',
        pageDescripton: 'Welcome to (MEAN) test page indexed by chetananand for SEO, studentinfosysapp'
    };
});

app.controller('studentListController', function($scope) {
	console.log("inside student controller");
	$scope.$parent.seo = {
        pageTitle : 'studentinfosysapp',
        pageDescripton: 'Welcome to (MEAN) test page indexed by chetananand for SEO, studentinfosysapp'
    };
});

app.controller('eventListController', function($scope) {
	console.log("inside event controller");
	$scope.$parent.seo = {
        pageTitle : 'studentinfosysapp',
        pageDescripton: 'Welcome to (MEAN) test page indexed by chetananand for SEO, studentinfosysapp - Events page'
    };
});

app.controller('aboutController', function($scope) {
	console.log("inside about controller");
	// $scope.$parent.seo = {
 //        pageTitle : 'AngularJS SEO Tutorial',
 //        pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.'
 //    };
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