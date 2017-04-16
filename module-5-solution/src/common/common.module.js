(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://shrouded-savannah-26453.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
