(function(){
	'use strict';

	angular.module('common')
	.controller('RegController', RegController);

	RegController.$inject = ['MenuService'];

	function RegController (MenuService) {
		var reg = this;

		reg.getUserData = function () {
            MenuService.getDishName(reg.user.dish).then(function(response) {
            reg.user.dish = response.data; 
			MenuService.setUserData(reg.user);
			reg.success = true;
			reg.error = false;
            }, function(response) {
            	reg.success = false;
            	reg.error = true;
            })
            }
	}
})();