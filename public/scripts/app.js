var app = angular.module('studentApp', ['ui.bootstrap', 'ui.router']);

app.controller('appController', function($scope) {
	console.log("Hello");
});

/* Sticky Header */
var $menu = document.querySelector('#nav-menu');
window.onscroll = function() {
	console.log("Scroll " + window.pageYOffset)
	if(window.pageYOffset > 60){
		$menu.className = "menu cf menu-sticky";
	}else{
		$menu.className = "menu cf";
	}
}