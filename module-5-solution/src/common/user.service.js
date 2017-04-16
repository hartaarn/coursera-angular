(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  service.setFavItem = function(favItem) {
    service.favItem = favItem;
  };

  service.setUser = function(user) {
    service.user = user;
  };

  service.getUser = function() {
    return service.user;
  };

  service.getFavItem = function() {
    return service.favItem;
  }

 
}



})();