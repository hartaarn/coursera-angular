(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService','MenuService','$filter'];
function SignUpController(UserService, MenuService, $filter) {
  var $ctrl = this;
  $ctrl.signUpSuccess = false;
  $ctrl.user = {};
  $ctrl.saved = false;
  $ctrl.favItem = {};
  $ctrl.favItemShortName = '';
  $ctrl.found = false;

  $ctrl.user = UserService.getUser();
  $ctrl.favItem = UserService.getFavItem();

  $ctrl.submit = function () {
  	$ctrl.saved = true;
  	
   	var promise = MenuService.getMenuItem( $filter('uppercase')($ctrl.favItemShortName) );

  	  promise.then(function (response) {
      	//$ctrl.favItem = response;
      	$ctrl.searchInvalid = false;
      	UserService.setFavItem(response);
      	UserService.setUser($ctrl.user);
      	$ctrl.signUpSuccess = true;
      	return true;
     })
     .catch(function (error) {
     	$ctrl.searchInvalid = true;
       	return false;
     });
  }

  $ctrl.validateFavItem = function() {
      var promise = MenuService.getMenuItem( $filter('uppercase')($ctrl.favItemShortName) );

      promise.then(function () {
          $ctrl.searchInvalid = false;
        })
        .catch(function() {
          $ctrl.searchInvalid = true;
        });
    }

}


})();
