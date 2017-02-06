(function(){
	'use strict';

	angular.module('common')
	.controller('UserController', UserController);

	UserController.$inject = ['userData'];

	function UserController (userData) {
		var userCtrl = this;
		userCtrl.user = userData;
	}
})();