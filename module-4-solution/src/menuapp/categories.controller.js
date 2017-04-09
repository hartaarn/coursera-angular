(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService','categories'];
function CategoriesController(MenuDataService, categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories.data;
}

})();
