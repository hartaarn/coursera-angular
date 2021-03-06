(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	//$scope.errorMessage = "";
	$scope.itemList = "";
	$scope.validate = validate;
	$scope.customStyle = {};

	function validate(itemList){
		$scope.errorMessage = "";
		$scope.customStyle = {};
		var numItems = getNumberOfItems(itemList);
		switch ( true ) {
			case (numItems == 0):
				$scope.errorMessage = "Please enter data first";
				$scope.customStyle.colorClass = "red";
				break;
			case ( numItems <= 3):
				$scope.errorMessage = "Enjoy!";
				$scope.customStyle.colorClass = "green";
				break;
			case ( numItems > 3):
				$scope.errorMessage = "Too much!";
				$scope.customStyle.colorClass = "green";
				break;
		}
	};

	function getNumberOfItems(list){
		var comma = ",";
		var items = list.split(comma);

		// filter out empty strings in array of items
		var filteredItems = items.filter(isNotEmpty);

		return filteredItems.length;
	};

	function isNotEmpty (item) { // callback function for filtering array
		item = item.trim();
		return item.length > 0;
	};
}

})();