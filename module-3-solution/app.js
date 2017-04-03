(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
  	restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
    	found: '<',
    	onRemove: '&',
    	resultMessage:  '@message'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
	var menu = this;

	// menu.isEmpty = function () {
 //    	return typeof menu.found !== 'undefined' && menu.found.length === 0;
 //  	};
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.getMatchedMenuItems = function () {

  	menu.message = "";
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {
      menu.found = response;
      if (!menu.found.length) {
      	menu.message = "Nothing found";
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.removeItem = function (index) {
  	menu.found.splice(index,1);
  };

}



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			method: "GET",
	    	url: (ApiBasePath + "/menu_items.json")
	    }).then(function (result) {
	    	var fullMenu = result.data.menu_items;
		    
			var foundItems = [];

			if (searchTerm !== "") {
				for (var i = 0; i < fullMenu.length; i++) {
		          if (searchTerm !== "" && fullMenu[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
		            foundItems.push(fullMenu[i]);
		          }
		        }
		    }

		    return foundItems;
		});
	};
}


})();