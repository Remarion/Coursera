(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


// ToBuy Controller 	
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
		var buy = this;
		buy.errorMessage = "";
     
     buy.items = ShoppingListCheckOffService.buyItems();
     console.log(buy.items);

     buy.removeItem = function (itemIndex) {
        try  {
        ShoppingListCheckOffService.removeItem(itemIndex);
        }
        catch (error) {
        buy.errorMessage = errorMessage; 
        }
     }

	};

// AlreadyBought controller

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
         var bought = this;
    
    bought.items = ShoppingListCheckOffService.boughtItems();
 
     
	};

// Service function

	function ShoppingListCheckOffService () {
		var service = this;
    
    var ToBuyList = [
    { name: "Cookies", quantity: "10 bags"},
    { name: "Chips", quantity: "4 bags"},
    { name: "Cola", quantity: "10 bottles"},
    { name: "Skittles", quantity: "15 bags"},
    { name: "Hersheys", quantity: "20 bars"},
    { name: "Pringles", quantity: "5 bags"},
    { name: "Tea", quantity: "6 packs"}
    ];

    var BoughtList = []; 
   
    service.removeItem = function (itemIndex) {
    BoughtList.push(ToBuyList[itemIndex]);
    ToBuyList.splice(itemIndex, 1);
    };
    
    service.buyItems = function () {
    	return ToBuyList;
    };
    service.boughtItems = function () {
    	return BoughtList;
    };
	}; 

})();