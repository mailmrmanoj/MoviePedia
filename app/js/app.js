'use strict';

/* App Module */

var movieApp = angular.module('movieApp', [
  'ngRoute',
  'movieAnimations',
  'movieControllers',
   'movieDirectives',
   'movieServices'
]);
movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/movie-list.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: 'partials/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);
