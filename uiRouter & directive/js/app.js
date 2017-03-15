var App = angular.module('App',['ui.router']);

App.directive('header',function(){
	
	return {
		
		restrict:'EA',
		templateUrl:'views/header.html'
		
	}
	
	
	
});

App.directive('footer',function(){
	
	return {
		
		restrict:'EA',
		templateUrl:'views/footer.html'
		
	}
	
	
	
});

App.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	
	.state('home',{
		
		url:'/home',
		templateUrl:'views/home.html'
		
		
		
	})
	
	.state('about',{
		
		url:'/about',
		templateUrl:'views/about.html'
		
		
		
	})
	
})