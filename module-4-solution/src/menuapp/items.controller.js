(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

// 'details' is injected through state's resolve
ItemDetailController.$inject = ['MenuDataService','details']
function ItemDetailController(MenuDataService, details) {
  var itemsCtrl = this;
  itemsCtrl.items = details.data.menu_items;
  itemsCtrl.categoryDetails = details.data.category;

  //console.log("details.data: ", details.data);
}

})();
