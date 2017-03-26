(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;

	toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

	toBuy.buyItem = function (itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;

	alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

	alreadyBought.returnItem = function (itemIndex) {
		ShoppingListCheckOffService.returnItem(itemIndex);
	}
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name: 'milk', quantity: 2},
    {name: 'bananas', quantity: 12},
    {name: 'tomatoes', quantity: 6},
    {name: 'butter', quantity: 4},
    {name: 'rice', quantity: 1},
    {name: 'cheese', quantity: 1},
    {name: 'apples', quantity: 6}
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
  	boughtItems.push(toBuyItems[itemIndex]);
  	toBuyItems.splice(itemIndex,1);
  };

  service.returnItem = function (itemIndex) {
  	toBuyItems.push(boughtItems[itemIndex]);
  	boughtItems.splice(itemIndex,1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();