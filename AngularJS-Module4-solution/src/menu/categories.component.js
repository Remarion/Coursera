(function(){
	'use strict';

	angular.module('MenuApp')
	.component('categorieslist', {
		templateUrl: 'src/menu/templates/categories.list.template.html',
		bindings:{
			items: '<'
		}
	});
})();