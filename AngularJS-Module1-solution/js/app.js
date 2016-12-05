(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		$scope.menu = "";
		$scope.message = "";
		$scope.controlCheck = "";

		$scope.lunchCheck = function () {
			$scope.message = "";
			var mealCount = countMeal($scope.menu);

			if (mealCount == 0) {
				$scope.message = "Please enter data first";
				$scope.controlCheck = "error";
			}
			else if (mealCount <= 3) {
				$scope.message = "Enjoy!";
				$scope.controlCheck = "ok";
			}
			else if (mealCount > 3) {
				$scope.message = "Too much!";
				$scope.controlCheck = "error";
			}
		};

function countMeal(string) {
      string = string.trim();
      var count = 0;

      if (string.length > 0) {
        count = string
          .split(',')
          .map(function(v) {
            return v.trim();
          })
          .filter(function(v) {
            return v != '';
          })
          .length;
      }

      return count;
    }
  }
})();