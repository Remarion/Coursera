(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		// Redirecting in any case
    	$urlRouterProvider.otherwise('/');

    	// ** Set up states **

		$stateProvider
		// Home page
		.state('home', {
			url: '/',
			templateUrl: 'src/menu/templates/main-menu-template.html'
		})
		// Category page
		.state('MenuCategories', {
			url: '/categories',
			templateUrl: 'src/menu/templates/categories.template.html',
			controller: 'MainMenuController as categoriesCtrl',
			resolve: {
				items: ['MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})
		// Items page
    	.state('MenuCategories.items', {
			url: '/{categoryShortName}/items',
			templateUrl: 'src/menu/templates/items.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]
			}
		})
		}
})();