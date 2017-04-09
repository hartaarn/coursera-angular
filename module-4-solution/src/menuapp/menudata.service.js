(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['ApiBasePath', '$http']
function MenuDataService(ApiBasePath, $http) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
      method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
  };

  service.getItemsForCategory = function(categoryShortName) {
  	return $http({
  		method: "GET",
  		url: (ApiBasePath + "/menu_items.json"),
  		params: {
        	category: categoryShortName
      	}
  	});
  };
}

})();
