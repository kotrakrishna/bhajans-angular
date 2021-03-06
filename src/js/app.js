'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/content', {templateUrl: 'partials/content.html', controller: 'Stotras'});
  $routeProvider.when('/jsonBuilder', {templateUrl: 'partials/jsonBuilder.html', controller: 'JsonBuilder'});
  $routeProvider.otherwise({redirectTo: '/jsonBuilder'});
}]);