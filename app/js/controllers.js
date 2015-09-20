'use strict';

/* Controllers */
var movieControllers = angular.module('movieControllers', []);
movieControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
    $scope.orderByReleaseYear = 'Year';
  }]);
movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
  function($scope, $routeParams, Movie) {
    $scope.item = Movie.get({movieId: $routeParams.movieId}, function(item) {
      $scope.mainImageUrl = item.images[0];
    });
  }]);
